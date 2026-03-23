import type { RequestHandler } from "./$types";
import { ALLOWED_ORIGINS } from "$env/static/private";
import { Logger } from "$lib/logger";

const allowedHostnames = ALLOWED_ORIGINS.split(",")
  .map((h) => h.trim().toLowerCase())
  .filter(Boolean);
const route = "/redirect";

export const GET: RequestHandler = async ({ url, request }) => {
  const start = Date.now();

  const to = url.searchParams.get("to");
  if (!to) {
    const res = redirectTo("/");
    Logger.log({
      request,
      url,
      route,
      start,
      data: {
        outcome: "blocked",
        reason: "missing_to_param",
        status: res.status
      }
    });
    return res;
  }

  let target: URL;
  try {
    target = new URL(to);
  } catch (e) {
    const res = redirectTo("/");
    Logger.log({
      request,
      url,
      route,
      start,
      data: {
        outcome: "blocked",
        reason: "invalid_url",
        error: ((e as Error) ?? new Error("unknown error")).message,
        status: res.status
      }
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
    Logger.log({
      request,
      url,
      route,
      start,
      data: {
        outcome: "blocked",
        reason: "hostname_not_allowed",
        target_hostname: hostname,
        allowed_hostnames: allowedHostnames, // keep for quick debugging; remove if too noisy
        status: res.status
      }
    });
    return res;
  }

  const res = redirectTo(target.toString());
  Logger.log({
    request,
    url,
    route,
    start,
    data: {
      outcome: "redirect",
      target: target.toString(),
      target_hostname: hostname,
      status: res.status
    }
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
