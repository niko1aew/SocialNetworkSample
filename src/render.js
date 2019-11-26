import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import {addMessage} from './Redux/state'

export let renderViewTree = (state) => {
  ReactDOM.render(
    <App state={state} addMessageCallback={addMessage} />,
    document.getElementById("root")
  );
};
