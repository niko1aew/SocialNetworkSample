import React from 'react';
import classes from './Header.module.css';
import reactLogo from '../../assets/img/react.svg';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  console.log('Header props:', props);
  return (
    <header className={classes.header}>
      <img src={reactLogo} alt="logo"></img>
      <div className={classes.loginBlock}>
        {props.isAuth ? (
          props.authData.login
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
