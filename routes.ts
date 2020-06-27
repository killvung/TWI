import { Router } from "https://deno.land/x/oak/mod.ts";

import { TwitterApi } from "https://deno.land/x/deno_twitter_api/mod.ts";
import keys from "./keys.ts";

const twitterApi = new TwitterApi(keys);
const router = new Router();

interface tweet {
    full_text: string;
}

router
    .get('/', (context) => { context.response.body = 'Hello World' })
    .get("/api/killvung", async ({ response }: { response: any }) => {
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
    })

export default router;
