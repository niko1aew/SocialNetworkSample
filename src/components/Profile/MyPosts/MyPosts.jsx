import React from 'react';
import Post from './Post/Post'
import classes from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className='posts'>
          My posts:
          <Post text="Post 1"></Post>
          <Post text="Post 2"></Post>
          <Post text="Post 3"></Post>
          <Post text="Post 4"></Post>

        </div>
         
    )
}

export default MyPosts;