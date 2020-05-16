import React from 'react';
import classes from './ProfileInfo.module.css';
import Profile from '../Profile';
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
        <img src={props.profile.photos.large}></img><br/>
        {props.description}
      </div>
    </div>
  );
};

export default ProfileInfo;
