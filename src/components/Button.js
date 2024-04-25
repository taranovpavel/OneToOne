import React from 'react';
import classes from "./Button.module.css"
const Button = ({onclick,inner,size= "medium"}) => {
    return (
        <button onClick={onclick} className={size}>
            <p>{inner}</p>
        </button>
    );
};

export default Button;