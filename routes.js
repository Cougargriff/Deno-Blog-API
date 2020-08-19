import { Router } from "https://deno.land/x/oak@v4.0.0/mod.ts";
import createPost from "./controllers/createPost.js";
import getPosts from "./controllers/getPosts.js";
import updatePost from "./controllers/updatePost.js";
import deletePost from "./controllers/deletePost.js";
import getPost from "./controllers/getPost.js";

const router = new Router();

router
  .get("/posts", getPosts)
  .get("/posts/:id", getPost)
  .post("/posts", createPost)
  .put("/posts/:id", updatePost)
  .delete("/posts/:id", deletePost)

export default router;