import React from 'react';
import { connect } from 'react-redux';
import { authApi } from '../../api/api';
import Header from './Header';
import { setUserData } from '../../Redux/Reducers/authReducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    return authApi.isLoggedIn()
      .then((data) => {
        if (data.resultCode === 0) {
          this.props.setUserData(
            data.data.id,
            data.data.email,
            data.data.login
          );
        }
      });
  }

  render() {
    let authData = this.props.authData;
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
  return {
    isAuth: state.auth.isAuth,
    authData: { userId: state.auth.userId, email: state.auth.email, login: state.auth.login }
  };
};

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
