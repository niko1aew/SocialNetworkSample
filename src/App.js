import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import store from './Redux/reduxStore';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer></HeaderContainer>
        <Navbar></Navbar>
        <div className="app-wrapper-content">
          <Route render={() => <DialogsContainer />} path="/dialogs" />
          <Route render={() => <ProfileContainer store={store} />} path="/profile/:userId?" />
          <Route render={() => <UsersContainer />} path="/users" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
