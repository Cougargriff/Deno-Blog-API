import client from "../db/database.js";

class PostRepo {

  selectById(id) {
    return client.query(`SELECT * FROM posts WHERE id = $1`, id)
  }

  selectAll() {
    return client.query("SELECT * FROM posts ORDER BY id")
  }

  create(post) {
    return client.query(
      "INSERT INTO posts (title, content, time_stamp) VALUES ($1, $2, $3)",
      post.title,
      post.content,
      post.time
    );
  }

  delete(id) {
    return client.query(
      "DELETE FROM posts WHERE id = $1",
      id
    )
  }

  update(id, post) {
    var latestPost = this.selectById(id);
    var query = "UPDATE posts SET title = $1, content = $2, time_stamp = $3 WHERE id = $4";

    return client.query(
      query,
      post.title !== undefined ? post.title : latestPost.title,
      post.content !== undefined ? post.content : latestPost.content,
      post.time !== undefined ? post.time : latestPost.time,
      id
    )
  }
}

export default new PostRepo();

