import React from 'react';
import classes from './Dialogs.module.css';
import DialogButton from './DialogButton/DialogButton';
import Message from './Message/Message';
import AddNewMessageReduxForm from './Forms/AddNewMessageReduxForm';

const Dialogs = props => {
  let dialogButtons = props.dialogs.map(item => (
    <DialogButton
      id={item.id}
      key={item.id}
      name={item.name}
      image="https://h5p.org/sites/default/files/styles/medium-logo/public/logos/dialog_cards_icon-color.png?itok=P7YNwiZ9"
    />
  ));

  const onSubmit = (formData) => {
    props.addNewMessage(formData.newMessageText);
  }

  let messages = props.messages.map(item => (
    <Message
      messageText={item.message}
      isAnswer={item.isAnswer}
      key={item.id}
    />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogButtons}</div>
      <div className={classes.messages}>{messages}</div>
      <div className={classes.msgInput}>
        <AddNewMessageReduxForm onSubmit={onSubmit}/>
      </div>
    </div>
  );
};

export default Dialogs;
