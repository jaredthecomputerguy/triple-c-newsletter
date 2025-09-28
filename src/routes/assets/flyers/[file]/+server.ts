import fs from "fs";
import path from "path";
import mime from "mime";

import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params }) => {
  const filePath = path.resolve("static/newsletter/trap-takeover/flyers/", params.file);

  // make sure the file exists
  if (!fs.existsSync(filePath)) {
    return new Response("Not found", { status: 404 });
  }

  const data = fs.readFileSync(filePath);

  const contentType = mime.getType(filePath) || "application/octet-stream";

  // cache the file for 30 days
  const MAX_AGE = 60 * 60 * 24 * 30;

  return new Response(data, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": `public, max-age=${MAX_AGE}, immutable`
    }
  });
};
