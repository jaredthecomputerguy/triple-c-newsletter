import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  if (event.url.pathname.startsWith("/newsletter/")) {
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
  }

  return response;
};
