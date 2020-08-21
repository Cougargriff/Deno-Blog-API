import { createPost } from "../services/postService.js";

export default async ({
  params,
  request,
  response,
}) => {
  console.log("Handling createPost ...");
  const body = await request.body({ type: 'form'});
  const formData = await body.value
  console.log(formData)

  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid post data :(" };
    return;
  }

  const {
    value: { title, content },
  } = await request.body();

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
