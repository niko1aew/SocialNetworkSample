import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { addNewPost } from './../../../Redux/Reducers/profileReducer';

const mapStateToProps = (state) => {
  const profileState = state.profilePage;
  return {
    posts: profileState.posts
  };
};

const MyPostsContainer = connect(mapStateToProps, { addNewPost })(MyPosts);

export default MyPostsContainer;
