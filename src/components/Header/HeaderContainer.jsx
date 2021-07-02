import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthUserDataThunkCreator } from '../../Redux/Reducers/authReducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
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

export default connect(mapStateToProps, { getAuthUserData: getAuthUserDataThunkCreator })(HeaderContainer);
