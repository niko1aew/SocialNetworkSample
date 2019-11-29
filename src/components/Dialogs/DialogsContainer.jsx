import React from 'react';
import {
  addNewMessageActionCreator,
  setNewMessageTextActionCreator
} from './../../Redux/Reducers/dialogsReducer';
import Dialogs from './Dialogs';
const dialogsContainer = props => {
  const dialogsState = props.store.getState().dialogsPage;

  const sendMessage = () => {
    let action = addNewMessageActionCreator();
    props.store.dispatch(action);
  };

  const messageChangeCallback = text => {
    debugger;
    let action = setNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      dialogs={dialogsState.dialogs}
      messages={dialogsState.messages}
      sendMessage={sendMessage}
      newMessageText={dialogsState.newMessageText}
      messageChangeCallback={messageChangeCallback}
    />
  );
};
export default dialogsContainer;
