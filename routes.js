import { Application } from "https://deno.land/x/oak@v4.0.0/mod.ts";
import {
  createPost, 
  getPosts, 
  updatePost, 
  deletePost
} from "./controllers/index.js";

const router = new Router();

router
  .get("/posts", getPosts)
  .post("/posts", createPost)
  .put("/posts/:id", updatePost)
  .delete("/posts/:id", deletePost)

export default router;