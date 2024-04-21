import classes from "./ItemCard.module.css";
import SwiperComponent from "./SwiperComponent";
const ItemCard = ({clothes}) => {
    return (
        <div className={classes.card}>
            {/*<div className={classes.image} style={{backgroundImage: `url(${clothes.URL1})`}}></div>*/}
            <SwiperComponent image1={clothes.URL_1} image2={clothes.URL_2} image3={clothes.URL_3}/>
            <p className={classes.name}>{clothes.TYPE_RUS} {clothes.BRAND}</p>
            <p className={classes.price}>{clothes.PRICE}</p>
        </div>
    );
};

export default ItemCard;