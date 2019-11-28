import { createStore, combineReducers } from 'redux';
import profileReducer from './Reducers/profileReducer';
import dialogsReducer from './Reducers/dialogsReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
});

let store = createStore(reducers);

export default store;
