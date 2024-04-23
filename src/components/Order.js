import React from 'react';
import classes from "./Order.module.css";
import { ReactComponent as Cross} from "../images/icon-cross.svg"
const Order = ({isModal ,setModalOrder}) => {
    console.log(isModal)
    return (
        <>
            <Cross style={{display: `${isModal?"block":"none"}`}} onClick={()=>setModalOrder(false)} className={classes.cross}/>
            <div onClick={()=>setModalOrder(false)} style={{display: `${isModal?"block":"none"}`}} className={classes.background}></div>
            <div style={{display: `${isModal?"block":"none"}`}} className={classes.orderModal}>
                <div className={classes.order}>
                    <p className={classes.label}>Ваш заказ</p>
                    <div className={classes.orders}>
                        ЗАКАЗ
                    </div>
                    <p className={classes.price}>$777</p>
                    <div className={classes.inputs}>
                        <input type="text" placeholder={"Ф.И.О"}/>
                        <input type="text" placeholder={"Номер"}/>
                        <input type="text" placeholder={"Telegram"}/>
                        <input type="text" placeholder={"e-mail"}/>
                        <input type="text" placeholder={"Индес"}/>
                        <input type="text" placeholder={"Полный адрес"}/>
                        <div className={classes.promocode}>
                            <input type="text" placeholder={"Промокод"}/>
                            <button>активировать</button>
                        </div>
                        <button className={classes.checkout}>оформить заказ</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Order;