import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
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
          <Route render={() => <DialogsContainer />} path="/dialogs" />
          <Route render={() => <Profile store={store} />} path="/profile" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
