import { connect } from 'react-redux';
import {
  addNewMessage,
  setNewMessageText
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

const DialogsContainer = connect(mapStateToProps, {
  addNewMessage,
  setNewMessageText
})(Dialogs);
export default DialogsContainer;
