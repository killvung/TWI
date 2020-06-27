import { Application } from 'https://deno.land/x/oak/mod.ts';
import { DEFAULT_PORT } from "./config.ts";

import router from "./routes.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server is running on port ${DEFAULT_PORT}`)

await app.listen({ port: DEFAULT_PORT });
