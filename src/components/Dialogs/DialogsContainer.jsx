import React from 'react';
import {
  addNewMessageActionCreator,
  setNewMessageTextActionCreator
} from './../../Redux/Reducers/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../storeContext';
const dialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        const dialogsState = store.getState().dialogsPage;
        const sendMessage = () => {
          let action = addNewMessageActionCreator();
          store.dispatch(action);
        };

        const messageChangeCallback = text => {
          let action = setNewMessageTextActionCreator(text);
          store.dispatch(action);
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
      }}
    </StoreContext.Consumer>
  );
};
export default dialogsContainer;
