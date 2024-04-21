import React from 'react';
import classes from "./NothingFoundPage.module.css";
const NothingFoundPage = () => {
    return (
        <div className={classes.NothingFound}>
            <p>По вашему запросу ничего не найдено</p>
        </div>
    );
};

export default NothingFoundPage;