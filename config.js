import { config } from "https://deno.land/x/dotenv/mod.ts";
const env = config()

export const APP_HOST = env.APP_HOST || "127.0.0.1";
export const APP_PORT = env.APP_PORT || 4000;
export const PSW = env.PSW || undefined
export const DB_NAME = env.DB_NAME || undefined
export const DB_PORT = env.DB_PORT || undefined
export const DB_USER = env.DB_USER || undefined
