import type { RequestHandler } from "./$types";
import { ALLOWED_ORIGINS } from "$env/static/private";

const allowedHostnames = ALLOWED_ORIGINS.split(",")
  .map((h) => h.trim().toLowerCase())
  .filter(Boolean);

const log = (request: Request, url: URL, data: Record<string, unknown>) => {
  // Railway shows stdout; keep it single-line JSON
  // eslint-disable-next-line no-console
  console.log(
    JSON.stringify({
      time: new Date().toISOString(),
      route: "/redirect",
      method: request.method,
      path: url.pathname,
      query_to: url.searchParams.get("to"),
      referer: request.headers.get("referer"),
      ua: request.headers.get("user-agent"),
      ip:
        // best-effort behind proxy
        request.headers.get("x-forwarded-for") ?? request.headers.get("cf-connecting-ip") ?? null,
      ...data
    })
  );
};

export const GET: RequestHandler = async ({ url, request }) => {
  const started = Date.now();
  // lightweight helper to ensure we always emit a single JSON line

  const to = url.searchParams.get("to");
  if (!to) {
    const res = redirectTo("/");
    log(request, url, {
      outcome: "blocked",
      reason: "missing_to_param",
      status: res.status,
      duration_ms: Date.now() - started
    });
    return res;
  }

  let target: URL;
  try {
    target = new URL(to);
  } catch (e) {
    const res = redirectTo("/");
    log(request, url, {
      outcome: "blocked",
      reason: "invalid_url",
      error: ((e as Error) ?? new Error("unknown error")).message,
      status: res.status,
      duration_ms: Date.now() - started
    });
    return res;
  }

  // Normalize apex → www for your domain
  if (target.hostname === "tripleccollective.com") {
    target.hostname = "www.tripleccollective.com";
  }

  const hostname = target.hostname.toLowerCase();

  if (!allowedHostnames.includes(hostname)) {
    const res = redirectTo("/");
    log(request, url, {
      outcome: "blocked",
      reason: "hostname_not_allowed",
      target_hostname: hostname,
      allowed_hostnames: allowedHostnames, // keep for quick debugging; remove if too noisy
      status: res.status,
      duration_ms: Date.now() - started
    });
    return res;
  }

  const res = redirectTo(target.toString());
  log(request, url, {
    outcome: "redirect",
    target: target.toString(),
    target_hostname: hostname,
    status: res.status,
    duration_ms: Date.now() - started
  });
  return res;
};

function redirectTo(location: string): Response {
  return new Response(null, {
    status: 302,
    headers: {
      Location: location,
      "Content-Length": "0",
      Connection: "close"
    }
  });
}
