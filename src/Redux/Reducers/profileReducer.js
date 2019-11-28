const ADD_NEW_POST = 'ADD-NEW-POST';
const SET_NEW_POST_TEXT = 'SET-NEW-POST-TEXT';

let initialState = {
  newPostText: '',
  posts: [
    { id: '1', text: 'Post 1', likesCount: 12, image: '' },
    {
      id: '2',
      text: 'Post 2',
      likesCount: 5,
      image:
        'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg'
    },
    {
      id: '3',
      text: 'Post 3',
      likesCount: 0,
      image: 'https://www.w3schools.com/w3images/avatar6.png'
    },
    { id: '4', text: 'Post 4', likesCount: 9, image: '' }
  ]
};

const profileReducer = (state = initialState, action) => {
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
