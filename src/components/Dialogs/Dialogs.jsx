import React from "react";
import classes from "./Dialogs.module.css";
import DialogButton from "./DialogButton/DialogButton";
import Message from "./Message/Message";
const Dialogs = props => {
  debugger;
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {props.state.dialogs.map(item => (
          <DialogButton id={item.id} name={item.name} />
        ))}
      </div>
      <div className={classes.messages}>
        {props.state.messages.map(item => (
          <Message messageText={item.message} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
