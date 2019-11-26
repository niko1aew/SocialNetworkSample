import * as serviceWorker from './serviceWorker';
import state, {
  subscribe,
  addMessage,
  setMsgText,
  addPost,
  setPostText
} from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let renderEntireTree = state => {
  ReactDOM.render(
    <App
      state={state}
      addMessageCallback={addMessage}
      msgTextChangeCallback={setMsgText}
      addPost={addPost}
      setPostText={setPostText}
    />,
    document.getElementById('root')
  );
};

renderEntireTree(state);

subscribe(renderEntireTree);

serviceWorker.unregister();
