import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = props => {
  let newPost = () => {
    props.addPost();
  };

  let postTextAreaChange = event => {
    let text = event.target.value;
    props.setPostText(text);
  };

  return (
    <button>
      <ProfileInfo
        description="ava+description"
        image="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      />
      <div>
        <textarea
          preventDefault={true}
          value={props.profilePage.newPostText}
          onChange={postTextAreaChange}
        ></textarea>
      </div>
      <button>
        <button onClick={newPost}>New post</button>
      </button>
      <MyPosts posts={props.profilePage.posts} />
    </button>
  );
};

export default Profile;
