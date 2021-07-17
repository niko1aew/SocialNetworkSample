import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../../Shared/FormsControls/FormControls';
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import classes from './AddNewMessageReduxForm.module.css';

const maxLength30 = maxLengthCreator(30);

const AddNewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                  className={classes.txtArea}
                  component={Textarea}
                  placeholder={"New message"}
                  name={"newMessageText"}
                  validate={[required, maxLength30]}
                />
            </div>
            <div>
                <button
                 className={classes.btnAddPost}
                 >Send</button>
            </div>
        </form>
    )
}

export default reduxForm({
form: 'AddMessageForm'
})(AddNewMessageForm)