import { connect } from 'react-redux';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
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

const withAuthRedirectContainer = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {
  addNewMessage,
  setNewMessageText
})(withAuthRedirectContainer);

export default DialogsContainer;
