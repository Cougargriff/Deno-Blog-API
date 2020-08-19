import { Client } from "https://deno.land/x/postgres/mod.ts";
import {
  APP_HOST,
  APP_PORT,
  PSW,
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_USER
} from "../config.js";

class Database {
  constructor() {
    this.connect();
    console.log("DB_PORT ", typeof(DB_PORT))
    console.log('DB_HOST',  DB_HOST)
    console.log("DB_USER ", DB_USER)
    console.log("DB_NAME ", DB_NAME)
    console.log("PSW", PSW)
  }

  async connect() {
    this.client = new Client({
      user: DB_USER,
      database: DB_NAME,
      hostname: DB_HOST,
      password: PSW,
      port: DB_PORT
    })
    
    await this.client.connect()
  }

}

export default new Database().client