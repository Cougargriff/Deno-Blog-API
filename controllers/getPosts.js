import { getPosts } from "../services/postService.js";

export default async ({ response }) => {
  console.log("Handling getPosts ...")
  response.body = await getPosts();
}