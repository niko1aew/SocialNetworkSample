import React from 'react';
import Post from './Post/Post'
import classes from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className='posts'>
          My posts:
          <Post text="Post 1"></Post>
          <Post text="Post 2" image="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"></Post>
          <Post text="Post 3" image="https://www.w3schools.com/w3images/avatar6.png"></Post>
          <Post text="Post 4"></Post>

        </div>
         
    )
}

export default MyPosts;