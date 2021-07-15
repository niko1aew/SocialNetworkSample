import React from 'react';
import classes from './Dialogs.module.css';
import DialogButton from './DialogButton/DialogButton';
import Message from './Message/Message';
import { reduxForm, Field } from 'redux-form';

const Dialogs = props => {
  let dialogButtons = props.dialogs.map(item => (
    <DialogButton
      id={item.id}
      key={item.id}
      name={item.name}
      image="https://h5p.org/sites/default/files/styles/medium-logo/public/logos/dialog_cards_icon-color.png?itok=P7YNwiZ9"
    />
  ));

  const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={classes.txtArea} component={"textarea"} placeholder={"New message"} name={"newMessageText"}/>
            </div>
            <div>
                <button className={classes.btnAddPost}>Send</button>
            </div>
        </form>
    )
  }

  const onSubmit = (formData) => {
    props.addNewMessage(formData.newMessageText);
  }

  const AddMessageReduxForm = reduxForm({
    form: 'AddMessageForm'
  })(AddMessageForm)

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
        <AddMessageReduxForm onSubmit={onSubmit}/>
      </div>
    </div>
  );
};

export default Dialogs;
