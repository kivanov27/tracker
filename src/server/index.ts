import { serve } from "bun";
import index from "../app/index.html";
import { sql } from "../db/db";

const server = serve({
    routes: {
        "/*": index,
        "/api/todo-list": {
             async GET() {
                const todoTasks = await sql`SELECT * FROM todo`;
                return Response.json(todoTasks);
            },
            async POST(req) {
                const { task } = await req.json();
                const [todoTask] = await sql`INSERT INTO todo (task) VALUES (${task}) RETURNING *`
                return Response.json(todoTask);
            },
        },
        "/api/todo-list/:id": {
            async DELETE (req) {
                await sql`DELETE FROM todo WHERE id = ${req.params.id}`;
                return new Response(null, { status: 204 });
            },
        },
    },
    development: process.env.NODE_ENV !== "production" && {
        hmr: true,
        console: true,
    },
});

console.log(`🚀 Server running at ${server.url}`);
