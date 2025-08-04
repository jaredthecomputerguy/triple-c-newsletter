import type { RequestHandler } from "./$types";
import { ALLOWED_ORIGINS } from "$env/static/private";

const allowedHostnames = ALLOWED_ORIGINS.split(",");

export const GET: RequestHandler = ({ url }) => {
  const to = url.searchParams.get("to");
  if (!to) return redirectTo("/");

  let target: URL;
  try {
    target = new URL(to);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("Error parsing URL", e);
    return redirectTo("/");
  }

  // Normalize apex → www
  if (target.hostname === "tripleccollective.com") {
    target.hostname = "www.tripleccollective.com";
  }

  if (!allowedHostnames.includes(target.hostname)) {
    return redirectTo("/");
  }

  return redirectTo(target.toString());
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
