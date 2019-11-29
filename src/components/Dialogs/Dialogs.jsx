import React from 'react';
import classes from './Dialogs.module.css';
import DialogButton from './DialogButton/DialogButton';
import Message from './Message/Message';

const Dialogs = props => {
  let dialogButtons = props.dialogs.map(item => (
    <DialogButton
      id={item.id}
      name={item.name}
      image="https://h5p.org/sites/default/files/styles/medium-logo/public/logos/dialog_cards_icon-color.png?itok=P7YNwiZ9"
    />
  ));

  let messages = props.messages.map(item => (
    <Message messageText={item.message} isAnswer={item.isAnswer} />
  ));

  let sendMessage = () => {
    props.sendMessage();
  };

  let msgInputChange = event => {
    let inputText = event.target.value;
    props.messageChangeCallback(inputText);
  };

  let msgInputEnterSubmit = event => {
    if (event.key === 'Enter') {
      props.sendMessage();
    }
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogButtons}</div>
      <div className={classes.messages}>{messages}</div>
      <div className={classes.msgInput}>
        <textarea
          preventDefault={true}
          className={classes.txtArea}
          value={props.newMessageText}
          onChange={msgInputChange}
          onKeyDown={msgInputEnterSubmit}
        ></textarea>
        <button className={classes.btnAddPost} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
