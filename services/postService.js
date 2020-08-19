import postRepo from "../repositories/postRepo.js";

export const getPosts = async () => {
  /* returns db formatted object */
  const posts = await postRepo.selectAll();

  var result = [];
  posts.rows.map(post => {
    var obj = {};
    /* 
      for each row of returned query, parse each
      column into new object.
    */
    posts.rowDescription.columns.map( (el, i) => {
      obj[el.name] = post[i];
    })
    result.push(obj);
  })
  return result;
};

export const getPost = async postId => {
  const posts = await postRepo.selectById(postId);

  var obj = {};
  posts.rows.map(post => {
    /* should be only one row returned ... */
    posts.rowDescription.columns.map( (el, i) => {
      obj[el.name] = post[i]
    });
  });

  return obj;
};

export const createPost = async postData => {
  const newPost = {
    title: String(postData.title),
    content: String(postData.content),
    time: new Date()
  }

  await postRepo.create(newPost)

  return newPost.id;
}

export const updatePost = async (postId, postData) => {
  const post = await getPost(postId);

  if(Object.keys(post) === 0 && post.constructor === Object) {
    throw new Error("Post not found");
  }

  const updatedPost = {
    title: postData.title !== undefined ? String(postData.title) : post.title,
    content: postData.content !== undefined ? String(postData.content) : post.content,
    time: new Date()
  }

  postRepo.update(postId, updatedPost);
};

export const deletePost = async postId => {
  postRepo.delete(postId);
};