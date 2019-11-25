import React from "react";
import classes from "./Message.module.css";

const Message = props => {
  const isAnswer = props.isAnswer ? " " + classes.answer : "";
  debugger;
  return <div className={classes.message + isAnswer}>{props.messageText}</div>;
};

export default Message;
