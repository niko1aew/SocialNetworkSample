import React from "react";
import Post from "./Post/Post";

const MyPosts = props => {
  const posts = props.posts.map(item => (
    <Post
      id={item.id}
      text={item.text}
      image={item.image}
      likesCount={item.likesCount}
    />
  ));

  return (
    <div className="posts">
      My posts:
      {posts}
    </div>
  );
};

export default MyPosts;
