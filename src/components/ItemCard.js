import React from 'react';
import classes from "./ItemCard.module.css";
const ItemCard = ({clothes}) => {
    return (
        <div className={classes.card}>
            <img src={clothes.URL1} alt={clothes.NAME}/>
            <p className={classes.name}>{clothes.NAME} {clothes.BRAND}</p>
            <p className={classes.price}>{clothes.PRICE}</p>
        </div>
    );
};

export default ItemCard;