import { config } from "https://deno.land/x/dotenv/mod.ts";
const env = config()

export const APP_HOST = env.APP_HOST || Deno.env.get("HOST") || "127.0.0.1";
export const APP_PORT = env.APP_PORT || Deno.env.get("PORT") || 4000;
export const PSW = env.PSW || undefined
export const DB_NAME = env.DB_NAME || undefined
export const DB_PORT = parseInt(env.DB_PORT) || undefined
export const DB_USER = env.DB_USER || undefined
export const DB_HOST = env.DB_HOST || undefined
export const DB_URL = env.DATABASE_URL || Deno.env.get("DATABASE_URL") || undefined
