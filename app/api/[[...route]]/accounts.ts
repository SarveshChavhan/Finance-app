import { Hono } from "hono";
import { db } from "@/db/drizzle";
import { accounts } from "@/db/schema";

const app = new Hono()
    .get("/", async (c) => {
        try {
            const data = await db
                .select({
                    id: accounts.id,
                    name: accounts.name,
                })
                .from(accounts);

            return c.json({ data });
        } catch (error) {
            console.error('Database query failed:', error);
            return c.json({ error: 'Failed to fetch accounts' }, 500);
        }
    });

export default app;
