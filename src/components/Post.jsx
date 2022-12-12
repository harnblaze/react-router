import React from "react";

const Post = ({ match, posts }) => {
  const postId = match.params.postID;
  const getPostById = (id) => {
    return posts.find((el) => id === el.id.toString());
  };
  const post = getPostById(postId);
  return <h2>{post ? post.label : `post with id ${postId} not found`} </h2>;
};

export default Post;
