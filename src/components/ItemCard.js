import classes from "./ItemCard.module.css";
import SwiperComponent from "./SwiperComponent";
const ItemCard = ({clothes}) => {
    return (
        <div className={classes.card}>
            {/*<div className={classes.image} style={{backgroundImage: `url(${clothes.URL1})`}}></div>*/}
            <SwiperComponent image1={clothes.URL1} image2={clothes.URL2} image3={clothes.URL3}/>
            <p className={classes.name}>{clothes.NAME} {clothes.BRAND}</p>
            <p className={classes.price}>{clothes.PRICE}</p>
        </div>
    );
};

export default ItemCard;