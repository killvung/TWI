import { Application, send } from 'https://deno.land/x/oak/mod.ts';
import { DEFAULT_PORT } from "./config.ts";

import router from "./routes.ts";
const app = new Application();
app.use(async (context, next) => {
    try {
        await next();
    } catch (_) {
        context.throw(500, 'Oak sever error')
    }
});
app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (context) => {
    await send(context, context.request.url.pathname, {
        root: `${Deno.cwd()}/frontend/build`,
        index: "index.html",
    });
});


console.log(`Server is running on port ${DEFAULT_PORT}`)

await app.listen({ port: DEFAULT_PORT });
