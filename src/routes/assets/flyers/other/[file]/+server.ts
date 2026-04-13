import fs from "node:fs";
import path from "node:path";
import mime from "mime";

import type { RequestHandler } from "./$types";
import { Logger } from "$lib/logger";

// cache the file for 30 days
const MAX_AGE = 60 * 60 * 24 * 30;

export const GET: RequestHandler = async ({ request, url, params }) => {
  const start = Date.now();
  const route = `/assets/flyer/${params.file}`;
  const filePath = path.resolve("static/newsletter/other/", params.file);

  if (!fs.existsSync(filePath)) {
    Logger.request({
      request,
      url,
      route,
      start,
      data: {
        outcome: "not_found",
        filePath,
        status: 404
      }
    });
    return new Response("Not found", { status: 404 });
  }

  try {
    const data = fs.readFileSync(filePath);

    const contentType = mime.getType(filePath) || "application/octet-stream";

    Logger.request({
      request,
      url,
      route,
      start,
      data: {
        outcome: "found",
        content_type: contentType,
        content_length: data.length,
        filePath
      }
    });

    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": `public, max-age=${MAX_AGE}, immutable`
      }
    });
  } catch (e) {
    Logger.request({
      request,
      url,
      route,
      start,
      data: {
        outcome: "error",
        error: ((e as Error) ?? new Error("unknown error")).message,
        status: 500
      }
    });
    return new Response("Internal Server Error", { status: 500 });
  }
};
