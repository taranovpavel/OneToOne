import React from 'react';
import {setThank} from "../redux/ItemsSlice";
import { ReactComponent as Cross} from "../images/icon-cross.svg"
import classes from "./ThankYou.module.sass";
import {useDispatch, useSelector} from "react-redux";

const ThankYou = () => {
    const dispatch = useDispatch()
    const {isThank, isRUS} = useSelector(state => state.itemsReducer)

    return (
        <>
            <Cross style={{display: `${isThank?"block":"none"}`}} onClick={()=>dispatch(setThank())} className={"cross"}/>
            <div onClick={()=>dispatch(setThank())} style={{display: `${isThank?"block":"none"}`}} className={"background"}></div>
            <div style={{display: `${isThank?"block":"none"}`}} className={classes.thank}>
                <div className={classes.thank__inner}>
                    <p className={classes.thank__inner__order}>{isRUS?"Ваш заказ успешно оформлен":"Your order was successfully completed"}</p>
                    <p className={classes.thanl__inner__text}>{isRUS?"Спасибо за покупку мы свяжмся с вами в течении 12 часов":"Thanks for the purchase we will contact you within 12 hours"}</p>
                </div>
            </div>
        </>
    );
};

export default ThankYou;