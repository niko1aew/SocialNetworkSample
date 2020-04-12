import React from 'react';
import Axios from 'axios';
import Users from './Users';

class UsersApiContainer extends React.Component {

  componentDidMount() {
    this.setUsers();
  }

  changePage(pageNumber) {
    this.props.setCurrentPage(pageNumber);
    this.setUsers(pageNumber);
  }

  setUsers(pageNumber){
    this.fetchUsers(this.props.pageSize, pageNumber || this.props.currentPage)
      .then(data => {
        this.props.setUsers(data.items);
        this.props.setUsersCount(data.totalCount);
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

export default UsersApiContainer;
