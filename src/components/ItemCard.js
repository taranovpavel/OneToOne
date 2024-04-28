import classes from "./ItemCard.module.sass";
import SwiperComponent from "./SwiperComponent";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
const ItemCard = ({clothes}) => {
    const {isRUS, RUB} = useSelector(state => state.itemsReducer)
    return (
        <Link to={`/${clothes.ID}`}>
            <div className={classes.card}>
                <SwiperComponent swiperClasses={"swiperSmall"} photos={clothes.PHOTOS}/>
                <p className={classes.name}>{clothes.TYPE==="SHOES"?clothes.NAME:clothes.TYPE_ENG} {clothes.BRAND}</p>
                <p className={classes.price}>{isRUS?clothes.PRICE*RUB+"₽":"$"+clothes.PRICE}</p>
            </div>
        </Link>
    );
};

export default ItemCard;