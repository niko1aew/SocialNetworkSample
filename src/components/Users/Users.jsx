import React from 'react';
import classes from './Users.module.css';
import userImage from '../../assets/img/user.png';
import Preloader from '../Shared/Preloader/Preloader';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={`${classes.pageNumber} ${
                props.currentPage === p && classes.activePageNumber
              }`}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      { props.isFetching ? <Preloader/> : props.users.map((user) => (
        <div key={user.id}>
          <div className="user-name">{user.name}</div>
          <div className="user-status">{user.status}</div>
          <div>
            <img
              className={classes.userPhoto}
              src={user.photos.small ? user.photos.small : userImage}
              alt="UserPhoto"
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
