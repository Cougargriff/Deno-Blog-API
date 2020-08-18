import { updatePost } from "../services/postService.js";

export default async ({
  params,
  request,
  response
}) => {
  const postId = params.id;

  if(!postId) {
    response.status = 400;
    response.body=  { msg: "Invalid post id :(" };
    return;
  }

  if(!request.hasBody) { 
    response.status = 400;
    response.body = { msg: "Invalid post data :(" }
    return;
  }

  const {
    value: {title, content}
  } = await request.body()

  await updatePost(postId, {title, content});
  response.body = { msg: "Post updated :)"};
}