import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { loginThunkCreator } from '../../Redux/Reducers/authReducer';
import { Redirect } from 'react-router-dom';
import { Input } from '../Shared/Preloader/FormsControls/FormControls';
import { required } from '../../utils/validators/validators';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} component={Input} name={"rememberMe"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

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