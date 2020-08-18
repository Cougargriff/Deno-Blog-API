import { getPost } from "../services/postService.js";

export default async ({
  params,
  response
}) => {
  const postId = params.id;

  if(!postId) {
    response.status = 400;
    response.body=  { msg: "Invalid post id :(" };
    return;
  }

  const foundPost = await getPost(postId);
  if(!foundPost) {
    response.status = 404;
    response.body = { msg: "Post with ID ${postId} not found :(" }
  }

  response.body = foundPost;
}