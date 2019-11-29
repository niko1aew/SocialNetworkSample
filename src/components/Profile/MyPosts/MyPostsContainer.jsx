import React from 'react';
import MyPosts from './MyPosts';
import {
  setNewPostTextActionCreator,
  addNewPostActionCreator
} from './../../../Redux/Reducers/profileReducer';
import StoreContext from '../../../storeContext';

const MyPostsContainer = () => {
  // const profileState = props.store.getState().profilePage;

  return (
    <StoreContext.Consumer>
      {store => {
        const profileState = store.getState().profilePage;
        const setNewPostText = text => {
          let action = setNewPostTextActionCreator(text);
          store.dispatch(action);
        };

        const addNewPost = () => {
          let action = addNewPostActionCreator();
          store.dispatch(action);
        };
        return (
          <MyPosts
            setNewPostText={setNewPostText}
            addNewPost={addNewPost}
            posts={profileState.posts}
            newPostText={profileState.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
