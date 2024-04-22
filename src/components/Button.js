import React from 'react';
import classes from "./Button.module.css"
const Button = ({inner}) => {
    return (
        <button className={classes.Button}>
            <p>{inner}</p>
        </button>
    );
};

export default Button;