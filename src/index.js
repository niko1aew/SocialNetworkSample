import * as serviceWorker from './serviceWorker';
import store from './Redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
// let renderEntireTree = state => {
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// };

// renderEntireTree(store.getState());

// store.subscribe(() => {
//   let state = store.getState();
//   renderEntireTree(state);
// });

serviceWorker.unregister();
