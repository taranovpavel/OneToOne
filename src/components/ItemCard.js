import classes from "./ItemCard.module.css";
import SwiperComponent from "./SwiperComponent";
import {Link} from "react-router-dom";
const ItemCard = ({clothes}) => {
    return (
        <Link to={`/${clothes.ID}`}>
            <div className={classes.card}>
                <SwiperComponent photos={clothes.PHOTOS}/>
                <p className={classes.name}>{clothes.TYPE_RUS} {clothes.BRAND}</p>
                <p className={classes.price}>{clothes.PRICE}</p>
            </div>
        </Link>
    );
};

export default ItemCard;