import React from 'react';
import classes from "./Button.module.css"
const Button = ({onclick,inner}) => {
    return (
        <button onClick={onclick} className={classes.Button}>
            <p>{inner}</p>
        </button>
    );
};

export default Button;