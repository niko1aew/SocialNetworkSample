import * as serviceWorker from './serviceWorker';
import store from './Redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
let renderEntireTree = state => {
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} />,
    document.getElementById('root')
  );
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

serviceWorker.unregister();
