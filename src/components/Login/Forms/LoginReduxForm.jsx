import { reduxForm, Field } from 'redux-form';
import { Input } from '../../Shared/FormsControls/FormControls';
import { required } from '../../../utils/validators/validators';
import style from "./../../Shared/FormsControls/FormControls.module.css"

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
            { props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'login'
})(LoginForm)