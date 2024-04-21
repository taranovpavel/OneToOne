import classes from "./ItemCard.module.css";
import SwiperComponent from "./SwiperComponent";
import {Link} from "react-router-dom";
const ItemCard = ({clothes}) => {
    return (
        <Link to={`/${clothes.ID}`}>
            <div className={classes.card}>
                <SwiperComponent image1={clothes.URL_1} image2={clothes.URL_2} image3={clothes.URL_3}/>
                <p className={classes.name}>{clothes.TYPE_RUS} {clothes.BRAND}</p>
                <p className={classes.price}>{clothes.PRICE}</p>
            </div>
        </Link>
    );
};

export default ItemCard;