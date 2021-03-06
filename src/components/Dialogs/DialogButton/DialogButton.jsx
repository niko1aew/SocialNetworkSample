import React from "react";
import classes from "./DialogButton.module.css";
import { NavLink } from "react-router-dom";

const DialogButton = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog}>
      <span><img src={props.image} alt="dlgImg"></img></span>
      <NavLink to={path} activeClassName={classes.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogButton;
