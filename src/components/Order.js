import React from 'react';
import classes from "./Order.module.css";
import { ReactComponent as Cross} from "../images/icon-cross.svg"
import {useDispatch, useSelector} from "react-redux";
import {setModalOrder} from "../redux/ItemsSlice";
const Order = () => {
    const {items,isModal} = useSelector(state => state.itemsReducer)
    const dispatch = useDispatch()
    let totalPrice = 0
    for(const item in items){
        totalPrice += items[item].price
    }
    return (
        <>
            <Cross style={{display: `${isModal?"block":"none"}`}} onClick={()=>dispatch(setModalOrder())} className={classes.cross}/>
            <div onClick={()=>dispatch(setModalOrder())} style={{display: `${isModal?"block":"none"}`}} className={classes.background}></div>
            <div style={{display: `${isModal?"block":"none"}`}} className={classes.orderModal}>
                <div className={classes.order}>
                    <p className={classes.label}>Ваш заказ</p>
                    <div className={classes.orders}>
                        {items.map((item,idx)=>
                            <div className={classes.items} key={idx}>
                                <div className={classes.left}>
                                    <div className={classes.image} style={{backgroundImage: `url(${item.url})`}}/>
                                    <div className={classes.text}>
                                        <p className={classes.name}>{item.brand}</p>
                                        <p className={classes.name}>{item.name}</p>
                                        <p>размер: {item.size}</p>
                                    </div>
                                </div>
                                <p>{item.price}</p>
                            </div>
                        )}
                    </div>
                    <p className={classes.price}>Итого: {totalPrice}</p>
                    <div className={classes.inputs}>
                        <input type="text" placeholder={"Ф.И.О"}/>
                        <input type="text" placeholder={"Номер"}/>
                        <input type="text" placeholder={"Telegram"}/>
                        <input type="text" placeholder={"e-mail"}/>
                        <input type="text" placeholder={"Индес"}/>
                        <div>
                            <input type="text" placeholder={"Полный адрес"}/>
                            <p className={classes.free}>доставка по снг бесплатная</p>
                        </div>
                        <div>
                            <div className={classes.promocode}>
                                <input type="text" placeholder={"Промокод"}/>
                                <button>активировать</button>
                            </div>
                            <p>Промокоды можно найти у нас в <a href="">Tic-Tok</a></p>
                        </div>
                        <button className={classes.checkout}>оформить заказ</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Order;