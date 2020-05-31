import React from 'react';
import { usersApi } from '../../api/api';
import { connect } from 'react-redux';
import Users from './Users';
import {
  setUsers,
  followUser,
  unfollowUser,
  setUsersCount,
  setCurrentPage,
  toggleIsFetching,
} from '../../Redux/Reducers/usersReducer';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.setUsers();
  }

  changePage(pageNumber) {
    this.setUsers(pageNumber);
  }

  setUsers(pageNumber) {
    this.fetchUsers(
      this.props.pageSize,
      pageNumber || this.props.currentPage
    ).then((data) => {
      this.props.setUsers(data.items);
      this.props.setUsersCount(data.totalCount);
      if (pageNumber) {
        this.props.setCurrentPage(pageNumber);
      }
    });
  }

  fetchUsers(pageSize, currentPage) {
    this.props.toggleIsFetching(true);
    return usersApi.getUsers(pageSize, currentPage).then((data) => {
      this.props.toggleIsFetching(false);
      return data;
    });
  }

  render() {
    return (
      <>
        {/* {this.props.isFetching ? (
          <img src={loadingSpinner} alt="Loading..." />
        ) : ( */}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
          onPageChanged={this.changePage.bind(this)}
          isFetching={this.props.isFetching}
        ></Users>
        {/* )} */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  setUsers,
  setUsersCount,
  followUser,
  unfollowUser,
  setCurrentPage,
  toggleIsFetching,
})(UsersContainer);
