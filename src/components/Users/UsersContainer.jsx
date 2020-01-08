import { connect } from 'react-redux';
import {
  setUsersAC,
  followAC,
  unfollowAC
} from '../../Redux/Reducers/usersReducer';
import Users from './Users';

const mapStateToProps = state => {
  return {
    users: state.usersPage.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUsers: users => {
      dispatch(setUsersAC(users));
    },

    followUser: userId => {
      dispatch(followAC(userId));
    },

    unfollowUser: userId => {
      dispatch(unfollowAC(userId));
    }
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
