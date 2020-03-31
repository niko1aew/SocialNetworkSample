import React from 'react';
import Axios from 'axios';
import classes from './Users.module.css';
import userImage from '../../assets/img/user.png';

class Users extends React.Component {
  componentDidMount() {
    this.fetchUsers(this.props.pageSize, this.props.currentPage);
  }

  changePage(pageNumber){
    this.props.setCurrentPage(pageNumber);
    this.fetchUsers(this.props.pageSize, pageNumber);
  }

  fetchUsers(pageSize, currentPage){
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`
    ).then(response => {
      console.log(response);
      this.props.setUsers(response.data.items);
      this.props.setUsersCount(response.data.totalCount);
    });
  }

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map(p => {
            return (
              <span
                key={p}
                className={`${classes.pageNumber} ${this.props.currentPage ===
                  p && classes.activePageNumber}`}
                  onClick={
                    () => {
                      this.changePage(p);
                    }
                  }
              >
                  {p}
              </span>
            );
          })}
        </div>
        {this.props.users.map(user => (
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
                    this.props.unfollowUser(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.followUser(user.id);
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
}

// const Users = props => {
//   return (

//   );
// };

export default Users;
