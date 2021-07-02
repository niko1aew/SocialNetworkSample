const ADD_NEW_POST = 'ADD-NEW-POST';
const SET_NEW_POST_TEXT = 'SET-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

export let initialState = {
  newPostText: '',
  posts: [
    { id: '1', text: 'Post 1', likesCount: 12, image: '' },
    {
      id: '2',
      text: 'Post 2',
      likesCount: 5,
      image:
        'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
    },
    {
      id: '3',
      text: 'Post 3',
      likesCount: 0,
      image: 'https://www.w3schools.com/w3images/avatar6.png',
    },
    { id: '4', text: 'Post 4', likesCount: 9, image: '' },
  ],
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: {
      if (state.newPostText && state.newPostText.trim() !== '') {
        return {
          ...state,
          posts: [
            ...state.posts,
            {
              id: '30',
              text: state.newPostText,
              likesCount: 0,
            },
          ],
          newPostText: '',
        };
      } else {
        return state;
      }
    }

    case SET_NEW_POST_TEXT: {
      return { ...state, newPostText: action.text };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile  };
    }

    default:
      return state;
  }
};

export const addNewPost = () => ({
  type: ADD_NEW_POST,
});

export const setNewPostText = (text) => ({
  type: SET_NEW_POST_TEXT,
  text,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
})

export default profileReducer;
