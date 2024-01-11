import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { pathToFileURL } from "url";
// @ts-ignore - this is a generated file
import entry from "#vono/internal/server.entry";

const server = new Hono();

server.route("/", entry);

if (
  import.meta.url === pathToFileURL(process.argv[1]).href ||
  import.meta.url === pathToFileURL(process.argv[1]).href + ".js"
) {
  const port = parseInt(process.argv[2]) || 8000;
  console.log(`Listening on port http://localhost:${port}`);
  serve({
    fetch: server.fetch,
    port,
  });
}

export default server;
