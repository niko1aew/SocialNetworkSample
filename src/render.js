import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import {addMessage, setMsgText, addPost, setPostText} from './Redux/state'

export let renderViewTree = (state) => {
  ReactDOM.render(
    <App state={state} addMessageCallback={addMessage} msgTextChangeCallback = {setMsgText} addPost={addPost} setPostText={setPostText} />,
    document.getElementById("root")
  );
};
