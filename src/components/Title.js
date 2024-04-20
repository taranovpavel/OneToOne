import React from 'react';
import classes from "./Title.module.css";
const Title = ({title}) => {
    return (
        <h2 className={classes.title}>{title}</h2>
    );
};

export default Title;