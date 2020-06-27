import { Router } from "https://deno.land/x/oak/mod.ts";

import getTweets from './controllers/getTweets.ts';

const router = new Router();

router
    .get('/', (context) => { context.response.body = 'Hello World' })
    .get("/api/killvung", getTweets)

export default router;
