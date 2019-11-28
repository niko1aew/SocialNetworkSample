import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import store from './Redux/reduxStore';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header></Header>
        <Navbar></Navbar>
        <div className="app-wrapper-content">
          <Route
            render={() => (
              <Dialogs
                state={props.state.dialogsPage}
                dispatch={props.dispatch}
              />
            )}
            path="/dialogs"
          />
          <Route
            render={() => (
              <Profile
                store={store}
                // state={props.state.profilePage}
                // dispatch={props.dispatch}
              />
            )}
            path="/profile"
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
