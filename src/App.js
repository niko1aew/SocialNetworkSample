import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import store from './Redux/reduxStore';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { getAuthUserDataThunkCreator } from './Redux/Reducers/authReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeThunkCreator } from './Redux/Reducers/appReducer';
import Preloader from './components/Shared/Preloader/Preloader';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();    
  }

  render() {
    if (!this.props.initialized)
      return <Preloader/>
    
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer></HeaderContainer>
          <Navbar></Navbar>
          <div className="app-wrapper-content">
            <Route render={() => <DialogsContainer />} path="/dialogs" />
            <Route render={() => <ProfileContainer store={store} />} path="/profile/:userId?" />
            <Route render={() => <UsersContainer />} path="/users" />
            <Route render={() => <Login />} path="/login" />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  // withRouter,
  connect(mapStateToProps, { initializeApp: initializeThunkCreator }))(App);
