import React from 'react';
import Axios from 'axios';
import classes from './Users.module.css';
import userImage from '../../assets/img/user.png';

const Users = props => {
  if (props.users.length === 0) {
    Axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
      response => {
        console.log(response);
        props.setUsers(response.data.items);
        debugger;
      }
    );
  }
  return (
    <div>
      {props.users.map(user => (
        <div key={user.id}>
          <div className="user-name">{user.name}</div>
          <div className="user-status">{user.status}</div>
          <div>
            <img
              className={classes.userPhoto}
              src={user.photos.small ? user.photos.small : userImage}
            />
          </div>
          <div className="user-followed">
            {user.followed ? (
              <button
                onClick={() => {
                  props.unfollowUser(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.followUser(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
