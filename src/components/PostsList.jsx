import React from "react";

const PostsList = (posts) => {
  return (
    <>
      {posts.map((el) => (
        <h3 key={el.id}>{el.label}</h3>
      ))}
    </>
  );
};

export default PostsList;
