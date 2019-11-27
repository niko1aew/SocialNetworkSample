const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const SET_NEW_MESSAGE_TEXT = 'SET-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
  if (action.type === ADD_NEW_MESSAGE) {
    if (state.newMsgText && state.newMsgText.trim() !== '') {
      state.messages.push({
        id: '30',
        message: state.newMsgText,
        isAnswer: true
      });
      state.newMsgText = '';
    }
  } else if (action.type === SET_NEW_MESSAGE_TEXT) {
    state.newMsgText = action.text;
  }
  return state;
};

export const addNewMessageActionCreator = () => ({
    type: ADD_NEW_MESSAGE
  });
  export const setNewMessageTextActionCreator = text => ({
    type: SET_NEW_MESSAGE_TEXT,
    text
  });

export default dialogsReducer;