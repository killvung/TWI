import { Application } from 'https://deno.land/x/oak/mod.ts';
import { DEFAULT_PORT } from "./config.ts";
import { Router } from 'https://deno.land/x/oak/mod.ts'
import { TwitterApi } from "https://deno.land/x/deno_twitter_api/mod.ts";

import keys from "./keys.ts";
const twitterApi = new TwitterApi(keys);

const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

interface tweet {
    full_text: string;
}

router.get('/', (context) => {
    context.response.body = 'Hello world';
})

router.get('/api/test', ({ response }: { response: any }) => {
    response.body = 'hello world';
});

router.get('/api/@killvung', async ({ response }: { response: any }) => {
    const userTimeline = await twitterApi.get("statuses/user_timeline.json",
        {
            screen_name: "killvung",
            count: "20",
            trim_user: "true",
            tweet_mode: "extended",
        },
    );
    const preprocessedTweets: [string] = (await userTimeline.json())
        .map(({ full_text }: tweet) =>
            full_text
                .replace(/[^\x00-\x7F]/g, " ")
                .replace(/\s+/g, " ")
                .toLowerCase()
        );
    response.body = preprocessedTweets;
});

console.log(`Server is running on port ${DEFAULT_PORT}`)

await app.listen({ port: DEFAULT_PORT });
