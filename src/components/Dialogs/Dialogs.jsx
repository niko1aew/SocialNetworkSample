import React from 'react';
import classes from './Dialogs.module.css';
import DialogButton from './DialogButton/DialogButton';
import Message from './Message/Message';
import {
  addNewMessageActionCreator,
  setNewMessageTextActionCreator
} from './../../Redux/Reducers/dialogsReducer';
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

  let sendMessage = () => {
    props.dispatch(addNewMessageActionCreator());
  };

  let msgInputChange = event => {
    let inputText = event.target.value;
    props.dispatch(setNewMessageTextActionCreator(inputText));
  };

  let msgInputEnterSubmit = event => {
    if (event.key === 'Enter') {
      sendMessage();
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
          value={props.state.newMsgText}
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
