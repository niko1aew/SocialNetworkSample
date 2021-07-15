import { profileApi, usersApi } from '../../api/api';

const ADD_NEW_POST = 'ADD-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

export let initialState = {
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
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: {
      if (action.newPostText && action.newPostText.trim() !== '') {
        return {
          ...state,
          posts: [
            ...state.posts,
            {
              id: '30',
              text: action.newPostText,
              likesCount: 0,
            },
          ],
        };
      } else {
        return state;
      }
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile  };
    }

    default:
      return state;
  }
};

export const addNewPost = (newPostText) => ({
  type: ADD_NEW_POST,
  newPostText
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status
});

export const getStatusThunkCreator = (userId) => (dispatch) => {
  profileApi.getStatus(userId).then((data) => {
    dispatch(setStatus(data));
  });
};

export const updateStatusThunkCreator = (status) => (dispatch) => {
  profileApi.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export const getProfileThunkCreator = (userId) => {
  return (dispatch) => {
    usersApi.getProfile(userId)
      .then((data) => {
        dispatch(setUserProfile(data));
      });
  }
};

export default profileReducer;
