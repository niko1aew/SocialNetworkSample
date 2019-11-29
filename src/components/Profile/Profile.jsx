import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = () => {
  return (
    <button>
      <ProfileInfo
        description="ava+description"
        image="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      />
      <MyPostsContainer />
    </button>
  );
};

export default Profile;
