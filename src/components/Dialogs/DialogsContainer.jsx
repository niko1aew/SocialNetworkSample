import React from 'react';
import { connect } from 'react-redux';
import {
  addNewMessageActionCreator,
  setNewMessageTextActionCreator
} from './../../Redux/Reducers/dialogsReducer';
import Dialogs from './Dialogs';
// import StoreContext from '../../storeContext';
// const _dialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {store => {
//         const dialogsState = store.getState().dialogsPage;
//         const sendMessage = () => {
//           let action = addNewMessageActionCreator();
//           store.dispatch(action);
//         };

//         const messageChangeCallback = text => {
//           let action = setNewMessageTextActionCreator(text);
//           store.dispatch(action);
//         };
//         return (
//           <Dialogs
//             dialogs={dialogsState.dialogs}
//             messages={dialogsState.messages}
//             sendMessage={sendMessage}
//             newMessageText={dialogsState.newMessageText}
//             messageChangeCallback={messageChangeCallback}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = state => {
  const dialogsState = state.dialogsPage;
  return {
    dialogs: dialogsState.dialogs,
    messages: dialogsState.messages,
    newMessageText: dialogsState.newMessageText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: () => {
      let action = addNewMessageActionCreator();
      dispatch(action);
    },
    messageChangeCallback: text => {
      let action = setNewMessageTextActionCreator(text);
      dispatch(action);
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
