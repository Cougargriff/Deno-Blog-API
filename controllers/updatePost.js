import { updatePost } from "../services/postService.js";

export default async ({
  params,
  request,
  response
}) => {
  console.log("Handling updatePost ...")
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

  const body = await request.body({ type: 'form'});
  const content = await body.value.get("content")
  const title = await body.value.get("title")

  await updatePost(postId, {title, content});
  response.body = { msg: "Post updated :)"};
}