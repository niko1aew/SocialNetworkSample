import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const Profile = (props) => {
  return (
    <button>
      <ProfileInfo
        profile={props.profile}
      />
      <ProfileStatus status="test"></ProfileStatus>
      <MyPostsContainer />
    </button>
  );
};

export default Profile;
