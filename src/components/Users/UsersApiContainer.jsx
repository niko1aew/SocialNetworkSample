import React from 'react';
import Axios from 'axios';
import classes from './Users.module.css';
import userImage from '../../assets/img/user.png';

const UsersApiContainer = (props) => {
  debugger
}

class UsersApiContainer1 extends React.Component {
  constructor(){
    debugger
  }

  componentDidMount() {
      debugger
    let data = this.fetchUsers(this.props.pageSize, this.props.currentPage);
    this.props.setUsers(response.data.items);
    this.props.setUsersCount(response.data.totalCount);
  }

  changePage(pageNumber) {
    this.props.setCurrentPage(pageNumber);
    this.fetchUsers(this.props.pageSize, pageNumber);
  }

  fetchUsers(pageSize, currentPage) {
      debugger
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`
    ).then(response => {
      console.log(response);
      return response.data;
    });
  }

  render() {
    debugger
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
        onPageChanged={this.changePage}
      ></Users>
    );
  }
}

export default UsersApiContainer;
