import { Router } from "https://deno.land/x/oak/mod.ts";

import getTweets from './controllers/getTweets.ts';

const router = new Router();

router
    .get('/', async (context) => {
        await context.send({
            root: `${Deno.cwd()}/frontend/build`,
            index: "index.html",
        });
    })
    .get("/api/killvung", getTweets)

export default router;
