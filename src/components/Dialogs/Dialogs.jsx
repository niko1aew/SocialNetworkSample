import React from "react";
import classes from "./Dialogs.module.css";
import DialogButton from "./DialogButton/DialogButton";
import Message from "./Message/Message";
const Dialogs = props => {
  debugger;
  let dialogButtons = props.state.dialogs.map(item => (
    <DialogButton
      id={item.id}
      name={item.name}
      image="https://h5p.org/sites/default/files/styles/medium-logo/public/logos/dialog_cards_icon-color.png?itok=P7YNwiZ9"
    />
  ));

  let messages = props.state.messages.map(item => (
    <Message messageText={item.message} isAnswer={item.isAnswer} />
  ));
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogButtons}</div>
      <div className={classes.messages}>{messages}</div>
    </div>
  );
};

export default Dialogs;
