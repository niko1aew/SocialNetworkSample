import { authApi } from '../../api/api';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

export let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
    
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_AUTH_USER_DATA,
  data: { userId, email, login },
});

export const getAuthUserDataThunkCreator = () => {
  return (dispatch) => {
    authApi.me()
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(setAuthUserData(
            data.data.id,
            data.data.email,
            data.data.login
          ));
        }
      });
  }
}

export default authReducer;
