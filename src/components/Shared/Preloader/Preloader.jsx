import React from 'react';
import classes from './Preloader.module.css'
import loadingSpinner from '../../../assets/img/loading.svg';

const Preloader = (props) => {
    return (
          <div className={classes.spinnerContainer}>
            <img className={classes.spinnerImage} src={loadingSpinner} alt="Loading..."></img>
          </div>
    )
}

export default Preloader;