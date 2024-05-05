import SwiperComponent from "./SwiperComponent";
import classes from "./ItemCard.module.sass";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ItemCard = ({clothes}) => {
    const {isRUS, RUB} = useSelector(state => state.itemsReducer)
    return (
        <Link to={`/${clothes.ID}`}>
            <div className={classes.card}>
                <SwiperComponent swiperClasses={"swiperSmall"} photos={clothes.PHOTOS}/>
                <p className={classes.card__name}>{clothes.TYPE==="SHOES"?clothes.NAME:clothes.TYPE_ENG} {clothes.BRAND}</p>
                {clothes.SPECIAL?<div className={classes.card__price__container}><p className={classes.card__price__container__new}>{isRUS?clothes.NEW_PRICE*RUB+"₽":"$"+clothes.NEW_PRICE}</p><p className={classes.card__price__container__old}>{isRUS ? clothes.PRICE * RUB + "₽" : "$" + clothes.PRICE}</p></div>:<p className={classes.card__price}>{isRUS ? clothes.PRICE * RUB + "₽" : "$" + clothes.PRICE}</p>}
            </div>
        </Link>
    );
};

export default ItemCard;