import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <button>
      <ProfileInfo
        profile={props.profile}
      />
      <MyPostsContainer />
    </button>
  );
};

export default Profile;
