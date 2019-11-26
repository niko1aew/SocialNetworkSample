import * as serviceWorker from './serviceWorker';
import store from './Redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let renderEntireTree = store => {
  ReactDOM.render(
    <App
      state={store.state}
      addMessageCallback={store.addMessage}
      msgTextChangeCallback={store.setMsgText}
      addPost={store.addPost}
      setPostText={store.setPostText}
    />,
    document.getElementById('root')
  );
};

renderEntireTree(store);

store.subscribe(renderEntireTree);

serviceWorker.unregister();
