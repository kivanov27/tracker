import { serve } from "bun";
import index from "./index.html";
import { sql } from "./db";

const server = serve({
    routes: {
        // Serve index.html for all unmatched routes.
        "/*": index,
        "/api/hello": {
            async GET(req) {
                return Response.json({
                    message: "Hello, world!",
                    method: "GET",
                });
            },
            async PUT(req) {
                return Response.json({
                    message: "Hello, world!",
                    method: "PUT",
                });
            },
        },
        "/api/hello/:name": async req => {
            const name = req.params.name;
            return Response.json({
                message: `Hello, ${name}!`,
            });
        },
        "/api/todo": {
            async GET() {
                const todoTasks = await sql`SELECT * FROM todo`;
                return Response.json(todoTasks);
            },
        },
        "/api/todo/:id": {
            async DELETE(req) {
                const result = await sql`DELETE FROM todo WHERE id = ${req.params.id}`;
                if (result.length === 0) {
                    return new Response(null, { status: 404 });
                }
                return new Response(null, { status: 204 });
            }
        }
    },

    development: process.env.NODE_ENV !== "production" && {
        // Enable browser hot reloading in development
        hmr: true,

        // Echo console logs from the browser to the server
        console: true,
    },
});

console.log(`🚀 Server running at ${server.url}`);
