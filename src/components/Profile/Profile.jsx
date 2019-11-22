import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
      <div className='mainContent'>
        <div>
          <img src='https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'></img>
        </div>
        <div>
          ava+description
        </div>
        <MyPosts></MyPosts>

      </div>
    )
}

export default Profile;