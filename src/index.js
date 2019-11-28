import * as serviceWorker from './serviceWorker';
import store from './Redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
let renderEntireTree = state => {
  debugger;
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} />,
    document.getElementById('root')
  );
};

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});

serviceWorker.unregister();
