import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
          <div className={classes.post}>
            <img className={classes.avatarImage} src={props.image ? props.image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} alt="User avatar"></img>
            {props.text}
          </div>
    )
}

export default Post;