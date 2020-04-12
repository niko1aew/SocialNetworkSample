import React from 'react';
import Post from './Post/Post';

const MyPosts = props => {
  let onNewPostClick = () => {
    props.addNewPost();
  };

  let onPostChange = event => {
    let text = event.target.value;
    props.setNewPostText(text);
  };
  const posts = props.posts.map(item => (
    <Post
      key={item.id}
      id={item.id}
      text={item.text}
      image={item.image}
      likesCount={item.likesCount}
    />
  ));

  return (
    <div>
      <div>
        <textarea
          preventDefault={true}
          value={props.newPostText}
          onChange={onPostChange}
        ></textarea>
      </div>
      <button onClick={onNewPostClick}>New post</button>

      <div className="posts">
        My posts:
        {posts}
      </div>
    </div>
  );
};

export default MyPosts;
