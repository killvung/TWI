import {
    CONSUMER_API_KEY,
    CONSUMER_API_SECRET,
    ACCESS_TOKEN,
    ACCESS_TOKEN_SECRET
} from '../config.ts';

interface TwitterConfig {
    consumerApiKey: string,
    consumerApiSecret: string,
    accessToken: string,
    accessTokenSecret: string
}

const twitterConfig: TwitterConfig = {
    consumerApiKey: CONSUMER_API_KEY,
    consumerApiSecret: CONSUMER_API_SECRET,
    accessToken: ACCESS_TOKEN,
    accessTokenSecret: ACCESS_TOKEN_SECRET
}

export default twitterConfig;
