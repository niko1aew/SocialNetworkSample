import React from 'react';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import {
  setNewPostTextActionCreator,
  addNewPostActionCreator
} from './../../../Redux/Reducers/profileReducer';

const mapStateToProps = state => {
  const profileState = state.profilePage;
  return {
    posts: profileState.posts,
    newPostText: profileState.newPostText
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addNewPostText: () => {
      let action = addNewPostActionCreator();
      dispatch(action);
    },
    setNewPostText: text => {
      let action = setNewPostTextActionCreator(text);
      dispatch(action);
    }
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
