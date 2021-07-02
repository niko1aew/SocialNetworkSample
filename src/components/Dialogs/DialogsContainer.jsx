import { connect } from 'react-redux';
import {
  addNewMessage,
  setNewMessageText
} from './../../Redux/Reducers/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = state => {
  const dialogsState = state.dialogsPage;
  const authState = state.auth;
  return {
    dialogs: dialogsState.dialogs,
    messages: dialogsState.messages,
    newMessageText: dialogsState.newMessageText,
    isAuth: authState.isAuth
  };
};

const DialogsContainer = connect(mapStateToProps, {
  addNewMessage,
  setNewMessageText
})(Dialogs);
export default DialogsContainer;
