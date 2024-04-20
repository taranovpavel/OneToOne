import React from 'react';
import classes from "./ItemCard.module.css";
import { ReactComponent as Buy} from "../images/icon-buy.svg"
const ItemCard = ({clothes}) => {
    return (
        <div className={classes.card}>
            <img src={clothes.url} alt={clothes.name}/>
            <p className={classes.name}>{clothes.name} {clothes.brand}</p>
            <p className={classes.price}>{clothes.price}</p>
        </div>
    );
};

export default ItemCard;