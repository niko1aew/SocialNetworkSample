import React from 'react';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Dialogs from './components/Dialogs/Dialogs'
import Profile from './components/Profile/Profile'
import {Route, BrowserRouter} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header></Header>
        <Navbar></Navbar>
        <div className='app-wrapper-content'>
          <Route component={Dialogs} path='/dialogs'/>
          <Route component={Profile} path='/profile'/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
