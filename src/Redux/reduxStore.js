import { createStore, combineReducers } from 'redux';
import profileReducer from './Reducers/profileReducer';
import dialogsReducer from './Reducers/dialogsReducer';
import usersReducer from './Reducers/usersReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
