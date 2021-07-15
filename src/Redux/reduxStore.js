import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './Reducers/profileReducer';
import dialogsReducer from './Reducers/dialogsReducer';
import usersReducer from './Reducers/usersReducer';
import authReducer from './Reducers/authReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
});

let store = createStore(
  reducers,
  
  {
    profilePage: profileReducer.initialState,
    dialogsPage: dialogsReducer.initialState,
    usersPage: usersReducer.initialState,
    auth: authReducer.initialState
  },
  applyMiddleware(thunkMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

window.store = store;

export default store;
