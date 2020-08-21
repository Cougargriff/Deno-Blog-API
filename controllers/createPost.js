import { createPost } from "../services/postService.js";

export default async ({
  params,
  request,
  response,
}) => {
  console.log("Handling createPost ...");
  
  
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid post data :(" };
    return;
  }
  const body = await request.body({ type: 'form'});
  const content = await body.value.get("content")
  const title = await body.value.get("title")

  if (!title || !content) {
    response.status = 422;
    response.body = {
      msg: "Incorrect post data :( Title and Content are required!",
    };
    return;
  }

  const postId = await createPost({
    title,
    content,
  });

  response.body = { msg: "Post created :)", postId };
};
