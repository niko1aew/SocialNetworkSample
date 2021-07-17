import React from 'react';
import Post from './Post/Post';
import AddNewPostReduxForm from './Forms/AddNewPostReduxForm';

const MyPosts = props => {

  const onSubmit = (formData) => {
    props.addNewPost(formData.newPostText);
  }
  
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
        <AddNewPostReduxForm onSubmit={onSubmit}/>
      </div>
      <div className="posts">
        My posts:
        {posts}
      </div>
    </div>
  );
};

export default MyPosts;
