import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = props => {
  let postTextArea = React.createRef();
  let newPost = () => {
    debugger;
    alert(postTextArea.current.value);
  };
  
  return (
    <div>
      <ProfileInfo
        description="ava+description"
        image="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      />
      <div>
        <textarea ref={postTextArea}></textarea>
      </div>
      <div>
        <button  onClick={newPost}>New post</button>
      </div>
      <MyPosts posts={props.state.posts} />
    </div>
  );
};

export default Profile;
