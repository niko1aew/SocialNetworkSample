import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../../utils/validators/validators'
import { Textarea } from '../../../Shared/FormsControls/FormControls';

const maxLength30 = maxLengthCreator(30);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                  component={Textarea}
                  placeholder={"New post"}
                  name={"newPostText"}
                  validate={[required, maxLength30]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
  }

  export default reduxForm({
    form: 'AddNewPostForm'
  })(AddNewPostForm)