import React from 'react';

const Users = props => {
  return (
    <div>
      {props.users.map(user => (
        <div key={user.id}>
          <div className="user-name">{user.fullName}</div>
          <div className="user-status">{user.status}</div>
          <div className="user-photo">
            <img src={user.photoUrl} />
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
