import React from 'react'
import * as Axios from 'axios'
import { connect } from 'react-redux';
import Users from './Users'
import {
  setUsersAC,
  followAC,
  unfollowAC,
  setUsersCountAC,
  setCurrentPageAC
} from '../../Redux/Reducers/usersReducer';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.setUsers();
  }

  changePage(pageNumber) {
    this.setUsers(pageNumber);
  }

  setUsers(pageNumber){
    this.fetchUsers(this.props.pageSize, pageNumber || this.props.currentPage)
      .then(data => {
        this.props.setUsers(data.items);
        this.props.setUsersCount(data.totalCount);
        if (pageNumber){
          this.props.setCurrentPage(pageNumber);
        }
      })  
  }

  fetchUsers(pageSize, currentPage) {
    return Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`
    ).then(response => {
      return response.data;
    });
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
      ></Users>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
