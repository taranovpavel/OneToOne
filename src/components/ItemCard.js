import React from 'react';
import classes from "./ItemCard.module.css";
const ItemCard = ({clothes}) => {
    return (
        <div className={classes.card}>
            <img src={clothes.url} alt={clothes.name}/>
            <p>{clothes.type} {clothes.brand}</p>
            <p>{clothes.price}</p>
            <button>в корзину</button>
        </div>
    );
};

export default ItemCard;