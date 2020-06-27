import { config } from "https://deno.land/x/dotenv/mod.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";

const argPort = flags.parse(Deno.args).port;
export const DEFAULT_PORT = argPort ? Number(argPort) : 8080;

const getConfigVariable = (name: string): string => {
    return Deno.env.get("DENO_ENV") === 'production' ?
        Deno.env.get(name) || "" : config()[name]
}

// Twitter API Credential
export const CONSUMER_API_KEY = getConfigVariable('CONSUMER_API_KEY')
export const CONSUMER_API_SECRET = getConfigVariable('CONSUMER_API_SECRET')
export const ACCESS_TOKEN = getConfigVariable('ACCESS_TOKEN')
export const ACCESS_TOKEN_SECRET = getConfigVariable('ACCESS_TOKEN_SECRET')
