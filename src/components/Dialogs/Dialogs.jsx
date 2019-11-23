import React from 'react';
import classes from './Dialogs.module.css';
import DialogButton from './DialogButton/DialogButton';
import Message from './Message/Message';
const Dialogs = props => {
  let dialogsData = [
    { id: '1', name: 'Valera' },
    { id: '2', name: 'Andrey' },
    { id: '3', name: 'Valera' },
    { id: '4', name: 'Ann' },
    { id: '5', name: 'Artem' }
  ];

  let messageData = [
    { id: '1', message: 'Message 1' },
    { id: '2', message: 'Message 2' },
    { id: '3', message: 'Message 3' },
    { id: '4', message: 'Message 4' },
    { id: '5', message: 'Message 5' }
  ];
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsData.map(item => (
          <DialogButton id={item.id} name={item.name} />
        ))}
      </div>
      <div className={classes.messages}>
        {messageData.map(item => (
          <Message messageText={item.message} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
