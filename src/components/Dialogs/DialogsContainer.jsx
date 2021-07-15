import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { addNewMessage } from './../../Redux/Reducers/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = state => {
  const dialogsState = state.dialogsPage;
  
  return {
    dialogs: dialogsState.dialogs,
    messages: dialogsState.messages,
    newMessageText: dialogsState.newMessageText
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { addNewMessage })
)(Dialogs);
