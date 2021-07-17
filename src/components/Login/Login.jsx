import React from 'react';

import { connect } from 'react-redux';
import { loginThunkCreator } from '../../Redux/Reducers/authReducer';
import { Redirect } from 'react-router-dom';
import LoginReduxForm from './Forms/LoginReduxForm';

const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe || false);
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

let mapStateToProps = (state) => {
    return {
      isAuth: state.auth.isAuth,
      authData: { userId: state.auth.userId, email: state.auth.email, login: state.auth.login }
    };
  };

export default connect(mapStateToProps, { login: loginThunkCreator })(Login);