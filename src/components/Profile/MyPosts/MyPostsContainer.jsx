import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import {
  setNewPostText,
  addNewPost,
} from './../../../Redux/Reducers/profileReducer';

const mapStateToProps = (state) => {
  const profileState = state.profilePage;
  return {
    posts: profileState.posts,
    newPostText: profileState.newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addNewPost,
  setNewPostText,
})(MyPosts);

export default MyPostsContainer;
