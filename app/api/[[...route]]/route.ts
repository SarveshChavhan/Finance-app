import {z} from 'zod'
import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { zValidator } from '@hono/zod-validator'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'
import accounts from "./accounts"



export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.get("/hello", (c)=>{
    return c.json({
        message: "Hello world"
    })
})

const routes= app
    .route("/accounts", accounts);

export type AppType= typeof routes;


// app.route('/authors', authors)
// app.route('/books', books)

// .get("/hello/:test", zValidator("param", z.object({
//     test: z.string(),

//   })),(c) => {
//     const test= c.req.valid("param");

//     return c.json({
//       message: "Hello world",
//       test:test,
//   })
// })

// .post("/",zValidator("json", z.object({name: z.string(),userId:z.number()})),
//     (c) => {
//       const {name, userId}=c.req.valid("json");
//       return c.json({});
//     }
// )

export const GET = handle(app)
export const POST = handle(app)