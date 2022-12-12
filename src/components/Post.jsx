import React from "react";

const Post = ({ id, posts }) => {
  const getPostById = (id) => {
    return posts.find((el) => id === el.id.toString());
  };

  const post = getPostById(id);
  return <h2>{post ? post.label : `post with id ${id} not found`} </h2>;
};

export default Post;
