import React from 'react';
import {setThank} from "../redux/ItemsSlice";
import { ReactComponent as Cross} from "../images/icon-cross.svg"
import classes from "./ThankYou.module.css";
import {useDispatch, useSelector} from "react-redux";

const ThankYou = () => {
    const dispatch = useDispatch()
    const {isThank} = useSelector(state => state.itemsReducer)

    return (
        <>
            <Cross style={{display: `${isThank?"block":"none"}`}} onClick={()=>dispatch(setThank())} className={classes.cross}/>
            <div onClick={()=>dispatch(setThank())} style={{display: `${isThank?"block":"none"}`}} className={classes.background}></div>
            <div style={{display: `${isThank?"block":"none"}`}} className={classes.thankModal}>
                <div className={classes.thank}>
                    <p className={classes.order}>Ваш заказ успешно оформлен</p>
                    <p className={classes.thankYou}>Спасибо за покупку мы свяжмся с вами в течение 12 часов</p>
                </div>
            </div>
        </>
    );
};

export default ThankYou;