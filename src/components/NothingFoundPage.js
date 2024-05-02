import React from 'react';
import classes from "./NothingFoundPage.module.sass";
import {useSelector} from "react-redux";

const NothingFoundPage = () => {
    const {isRUS} = useSelector(state => state.itemsReducer)
    return (
        <div className={classes.nothing__found}>
            <p className={classes.nothing__found__text}>{isRUS?"По вашему запросу ничего не найдено":"Nothing found on your request"}</p>
        </div>
    );
};

export default NothingFoundPage;