import React from 'react';
import Axios from 'axios';
import classes from './Users.module.css';
import userImage from '../../assets/img/user.png';

class Users extends React.Component {
  componentDidMount() {
    Axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
      response => {
        console.log(response);
        this.props.setUsers(response.data.items);
      }
    );
  }
  render() {
    return (
      <div>
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
