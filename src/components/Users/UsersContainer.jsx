import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
  followThunkCreator,
  unfollowThunkCreator,
  getUsersThunkCreator
} from '../../Redux/Reducers/usersReducer';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  changePage(pageNumber) {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return (
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
          onPageChanged={this.changePage.bind(this)}
          isFetching={this.props.isFetching}
          toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
          isFollowingProgress={this.props.isFollowingProgress}
        ></Users>
    );
  }
}

// Все что ниже формирует пропсы
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingProgress: state.usersPage.isFollowingProgress
  };
};

export default connect(mapStateToProps, {
  followUser: followThunkCreator,
  unfollowUser: unfollowThunkCreator,
  getUsers: getUsersThunkCreator
})(UsersContainer);
