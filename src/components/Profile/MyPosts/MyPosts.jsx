import React from 'react';
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    { id: '1', text: 'Post 1', likesCount: 12, image: '' },
    {
      id: '2',
      text: 'Post 2',
      likesCount: 5,
      image:
        'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg'
    },
    {
      id: '3',
      text: 'Post 3',
      likesCount: 0,
      image: 'https://www.w3schools.com/w3images/avatar6.png'
    },
    { id: '4', text: 'Post 4', likesCount: 9, image: '' }
  ];

  const posts = postsData.map(item => (
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
