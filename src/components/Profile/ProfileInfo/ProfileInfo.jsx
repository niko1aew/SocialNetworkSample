import React from 'react';
import classes from './ProfileInfo.module.css';
import Profile from '../Profile';

const ProfileInfo = props => {
  return (
    <div>
      <div>
        <img src={props.image} alt="Wallpaper"></img>
      </div>
      <div>{props.description}</div>
    </div>
  );
};

export default ProfileInfo;
