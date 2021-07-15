import { authApi } from '../../api/api';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const LOGOUT = 'LOGOUT';

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

    case LOGOUT:
      return {
        ...state,
        ...action.data
      }

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_AUTH_USER_DATA,
  data: { userId, email, login },
});

export const setLogout = () => ({
  type: LOGOUT,
  data: { userId: null, email: null, login: null, isAuth: false },
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

export const loginThunkCreator = (email, password, rememberMe) => {
  return (dispatch) => {
    authApi.login(email, password, rememberMe)
      .then((data) => {
        if (data.resultCode === 0) {
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
      })
  }
}

export const logoutThunkCreator = () => {
  return (dispatch) => {
    authApi.logout()
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(setLogout());
        }
      })
  }
}

export default authReducer;
