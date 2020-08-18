import { getPosts } from "../services/postService.js";

export default async ({ response }) => {
  response.body = await getPosts();
}