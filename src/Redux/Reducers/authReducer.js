import { stopSubmit } from 'redux-form';
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
        ...action.data
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  data: { userId, email, login, isAuth },
});

export const getAuthUserDataThunkCreator = () => {
  return (dispatch) => {
    authApi.me()
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserData(
            response.data.data.id,
            response.data.data.email,
            response.data.data.login,
            true
          ));
        }
      });
  }
}

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
  authApi.login(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator());
      } else {
        let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: messages }));
      }
    })
}

export const logoutThunkCreator = () => (dispatch) => {
  authApi.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    })
}

export default authReducer;
