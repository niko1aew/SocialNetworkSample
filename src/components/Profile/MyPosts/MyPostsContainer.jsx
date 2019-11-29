import React from 'react';
import MyPosts from './MyPosts';
import {
  setNewPostTextActionCreator,
  addNewPostActionCreator
} from './../../../Redux/Reducers/profileReducer';

const MyPostsContainer = props => {
  const profileState = props.store.getState().profilePage;
  const setNewPostText = text => {
    let action = setNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  const addNewPost = () => {
    let action = addNewPostActionCreator();
    props.store.dispatch(action);
  };
  return (
    <MyPosts
      setNewPostText={setNewPostText}
      addNewPost={addNewPost}
      posts={profileState.posts}
      newPostText={profileState.newPostText}
    />
  );
};

export default MyPostsContainer;
