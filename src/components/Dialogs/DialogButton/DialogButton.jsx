import React from "react";
import classes from "./DialogButton.module.css";
import { NavLink } from "react-router-dom";

const DialogButton = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog}>
      <NavLink to={path} activeClassName={classes.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogButton;
