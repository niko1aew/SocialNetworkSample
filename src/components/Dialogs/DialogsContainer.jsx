import React from 'react';
import { connect } from 'react-redux';
import {
  addNewMessageActionCreator,
  setNewMessageTextActionCreator
} from './../../Redux/Reducers/dialogsReducer';
import Dialogs from './Dialogs';

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
