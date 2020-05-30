import React from 'react';
import classes from './Users.module.css';
import userImage from '../../assets/img/user.png';
import Preloader from '../Shared/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import * as Axios from 'axios';

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

      {props.isFetching ? (
        <Preloader />
      ) : (
        props.users.map((user) => (
          <div key={user.id}>
            <div className="user-name">{user.name}</div>
            <div className="user-status">{user.status}</div>
            <div>
              <NavLink to={'/profile/' + user.id}>
                <img
                  className={classes.userPhoto}
                  src={user.photos.small ? user.photos.small : userImage}
                  alt="UserPhoto"
                />
              </NavLink>
            </div>
            <div className="user-followed">
              {user.followed ? (
                <button
                  onClick={() => {
                    return Axios.delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          'API-KEY': '3e8bad1c-0e05-4078-8b97-dad8d65b31af',
                        },
                      }
                    ).then((response) => {
                      if (response.data.resultCode === 0) {
                        props.unfollowUser(user.id);
                      }
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    return Axios.post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          'API-KEY': '3e8bad1c-0e05-4078-8b97-dad8d65b31af',
                        },
                      }
                    ).then((response) => {
                      if (response.data.resultCode === 0) {
                        props.followUser(user.id);
                      }
                    });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Users;
