import React from 'react';
import classes from './Header.module.css';
import reactLogo from '../../assets/img/react.svg';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

  let onLogoutClick = () => {
    props.logout();
  };

  return (
    <header className={classes.header}>
      <img src={reactLogo} alt="logo"></img>
      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div>{props.authData.login} <button onClick={onLogoutClick}>Logout</button></div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
