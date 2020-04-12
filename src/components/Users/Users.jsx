import React from 'react';
import Axios from 'axios';
import classes from './Users.module.css';
import userImage from '../../assets/img/user.png';


const Users1 = (props) => {
  let pagesCount = Math.ceil(
    props.totalUsersCount / props.pageSize
  );
  debugger
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      test
      <div>
        {pages.map(p => {
          return (
            <span
              key={p}
              className={`${classes.pageNumber} ${props.currentPage ===
                p && classes.activePageNumber}`}
                onClick={
                  () => {
                    // this.changePage(p);
                    props.onPageChanged(p)
                    // props.setCurrentPage(p);
                  }
                }
            >
                {p}
            </span>
          );
        })}
      </div>
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
}

export default Users1;
