import React, { Suspense } from 'react';
import { fetchTweetsData } from "./tweetsResources";
const resource = fetchTweetsData();

export default () => {
    return (
        <Suspense fallback={'Loading...'}>
            <TweetsData />
        </Suspense>
    )
}

const TweetsData = () => {
    const tweets = resource.tweets.read()
    return tweets.map((tweet: string, index: number) => <p key={index}>{tweet}</p>)
}
