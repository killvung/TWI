// Reference: https://reactjs.org/docs/concurrent-mode-suspense.html#approach-3-render-as-you-fetch-using-suspense

function wrapPromise(promise) {
    let status = "pending";
    let result;
    let suspender = promise.then(
        r => {
            status = "success";
            result = r;
        },
        e => {
            status = "error";
            result = e;
        }
    );
    return {
        read() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw result;
            } else if (status === "success") {
                return result;
            }
        }
    };
}

export function fetchTweetsData() {
    const tweetsPromise = fetchTweets();
    return {
        tweets: wrapPromise(tweetsPromise)
    };
}

async function fetchTweets() {
    return await (await fetch('/api/killvung')).json()
}
