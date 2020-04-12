const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const SET_NEW_MESSAGE_TEXT = 'SET-NEW-MESSAGE-TEXT';

let initialState = {
  newMessageText: '',
  dialogs: [
    { id: '1', name: 'Valera' },
    { id: '2', name: 'Andrey' },
    { id: '3', name: 'Valera' },
    { id: '4', name: 'Ann' },
    { id: '5', name: 'Artem' },
  ],
  messages: [
    {
      id: '1',
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isAnswer: false,
    },
    { id: '2', message: 'Message 2', isAnswer: true },
    { id: '3', message: 'Message 3', isAnswer: true },
    { id: '4', message: 'Message 4', isAnswer: false },
    { id: '5', message: 'Message 5', isAnswer: true },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE: {
      if (state.newMessageText && state.newMessageText.trim() !== '') {
        return {
          ...state,
          messages: [
            ...state.messages,
            {
              id: '30',
              message: state.newMessageText,
              isAnswer: true,
            },
          ],
          newMessageText: '',
        };
      } else return state;
    }
    case SET_NEW_MESSAGE_TEXT: {
      return { ...state, newMessageText: action.text };
    }

    default:
      return state;
  }
};

export const addNewMessageActionCreator = () => ({
  type: ADD_NEW_MESSAGE,
});
export const setNewMessageTextActionCreator = (text) => ({
  type: SET_NEW_MESSAGE_TEXT,
  text,
});

export default dialogsReducer;
