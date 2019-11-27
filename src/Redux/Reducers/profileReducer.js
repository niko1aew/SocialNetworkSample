const ADD_NEW_POST = 'ADD-NEW-POST';
const SET_NEW_POST_TEXT = 'SET-NEW-POST-TEXT';

const profileReducer = (state, action) => {
  if (action.type === ADD_NEW_POST) {
    if (state.newPostText && state.newPostText.trim() !== '') {
      state.posts.push({
        id: '30',
        text: state.newPostText,
        likesCount: 0
      });
      state.newPostText = '';
    }
  } else if (action.type === SET_NEW_POST_TEXT) {
    state.newPostText = action.text;
  }

  return state;
};

export const addNewPostActionCreator = () => ({
  type: ADD_NEW_POST
});

export const setNewPostTextActionCreator = text => ({
  type: SET_NEW_POST_TEXT,
  text
});

export default profileReducer;
