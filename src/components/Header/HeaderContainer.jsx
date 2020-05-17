import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Header from './Header';
import { setUserData } from '../../Redux/Reducers/authReducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    return axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log('User auth data:', response.data);
        if (response.data.resultCode === 0) {
          this.props.setUserData(
            response.data.data.id,
            response.data.data.email,
            response.data.data.login
          );
        }
      });
  }

  render() {
    let authData = this.props.authData;
    debugger;
    return (
      <Header
        {...this.props}
        authData={{
          userId: authData.userId,
          email: authData.email,
          login: authData.login,
        }}
      />
    );
  }
}

let mapStateToProps = (state) => {
    debugger
  return {
    isAuth: state.auth.isAuth,
    authData: { userId: state.auth.userId, email: state.auth.email, login: state.auth.login }
  };
};

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
