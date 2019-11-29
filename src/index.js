import * as serviceWorker from './serviceWorker';
import store from './Redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import StoreContext, { Provider } from './storeContext';
let renderEntireTree = state => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});

serviceWorker.unregister();
