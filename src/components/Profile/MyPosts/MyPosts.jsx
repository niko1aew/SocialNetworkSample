import React from 'react';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea } from '../../Shared/Preloader/FormsControls/FormControls';

const maxLength30 = maxLengthCreator(30);

const MyPosts = props => {

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

  const onSubmit = (formData) => {
    props.addNewPost(formData.newPostText);
  }

  const PostReduxForm = reduxForm({
    form: 'AddNewPostForm'
  })(AddNewPostForm)
  
  const posts = props.posts.map(item => (
    <Post
      key={item.id}
      id={item.id}
      text={item.text}
      image={item.image}
      likesCount={item.likesCount}
    />
  ));

  return (
    <div>
      <div>
        <PostReduxForm onSubmit={onSubmit}/>
      </div>
      <div className="posts">
        My posts:
        {posts}
      </div>
    </div>
  );
};

export default MyPosts;
