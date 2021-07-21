import React from 'react';
import Preloader from '../../Shared/Preloader/Preloader';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader/>
  }
  const profileUserId = props.profile.userId;
  const userId = props.authorizedUserId;

  return (
    <div>
      <div>
        <img alt="User profile" src={props.profile.photos.large}></img><br/>
        {props.description}
      </div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} readOnly={profileUserId !== userId}></ProfileStatus>
    </div>
  );
};

export default ProfileInfo;
