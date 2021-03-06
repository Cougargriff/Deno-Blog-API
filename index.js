/*
  Deno doesn't support node modules so we need an express equivalent.
  In this case we are using Oak, https://github.com/oakserver/oak
*/
import { Application } from "https://deno.land/x/oak@v4.0.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { APP_HOST, APP_PORT } from "./config.js";
import router from "./routes.js";
import _404 from "./controllers/404.js";
import errorHandler from "./controllers/errorHandler.js";

const app = new Application();

app.use(oakCors()) // Enable CORS for All Routes
app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(_404);

console.log(`Listening on port: ${APP_PORT}...`);

await app.listen({ port: APP_PORT });