import { connect } from 'react-redux';
import {
  setUsersAC,
  followAC,
  unfollowAC,
  setUsersCountAC,
  setCurrentPageAC
} from '../../Redux/Reducers/usersReducer';
import UsersApiContainer from './Users';
// import Users from './Users';

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUsers: users => {
      dispatch(setUsersAC(users));
    },

    setUsersCount: usersCount => {
      dispatch(setUsersCountAC(usersCount));
    },

    followUser: userId => {
      dispatch(followAC(userId));
    },

    unfollowUser: userId => {
      dispatch(unfollowAC(userId));
    },

    setCurrentPage: currentPage => {
      dispatch(setCurrentPageAC(currentPage));
    }
  };
};

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer);
const UsersContainer = {}
// debugger
export default UsersContainer;
