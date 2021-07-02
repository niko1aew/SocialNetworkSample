import React from 'react';
import Preloader from '../../Shared/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader/>
  }
  return (
    <div>
      <div>
        <img src={props.image} alt="Wallpaper"></img>
      </div>
      <div>
        <img alt="User profile" src={props.profile.photos.large}></img><br/>
        {props.description}
      </div>
    </div>
  );
};

export default ProfileInfo;
