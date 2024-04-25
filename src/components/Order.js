import React from 'react';
import classes from "./Order.module.css";
import { ReactComponent as Cross} from "../images/icon-cross.svg"
import {useDispatch, useSelector} from "react-redux";
import {clearItems, deleteItem, minusValue, plusValue, setModalOrder} from "../redux/ItemsSlice";
import Button from "./Button";
const Order = () => {
    const {items,isModal} = useSelector(state => state.itemsReducer)
    const dispatch = useDispatch()
    let totalPrice = 0
    let finalItems = []
    for(const item in items){
        if (items[item].isDelete===false){
            totalPrice += items[item].price*items[item].value
            finalItems.push(items[item])
        }
    }
    if (finalItems.length === 0){
        dispatch(setModalOrder())
        // dispatch(clearItems())
    }
    document.body.style.overflow = isModal?"hidden":"visible"
    return (
        <>
            <Cross style={{display: `${isModal?"block":"none"}`}} onClick={()=>dispatch(setModalOrder())} className={classes.cross}/>
            <div onClick={()=>dispatch(setModalOrder())} style={{display: `${isModal?"block":"none"}`}} className={classes.background}></div>
            <div style={{display: `${isModal?"block":"none"}`}} className={classes.orderModal}>
                <div className={classes.order}>
                    <p className={classes.label}>Ваш заказ</p>
                    <div className={classes.orders}>
                        {finalItems.map((item,idx)=>
                            <div className={classes.items} key={idx}>
                                <div className={classes.left}>
                                    <div className={classes.image} style={{backgroundImage: `url(${item.url})`}}/>
                                    <div className={classes.text}>
                                        <p className={classes.name}>{item.brand}</p>
                                        <p className={classes.name}>{item.name}</p>
                                        <p>размер: {item.size}</p>
                                        <p>цена: ${item.price*item.value}</p>
                                    </div>
                                </div>
                                <div className={classes.value}>
                                    <Button size={"round"} onclick={()=>dispatch(minusValue(idx))} inner={"-"}/>
                                    <p>{item.value}</p>
                                    <Button size={"round"} onclick={()=>dispatch(plusValue(idx))} inner={"+"}/>
                                </div>
                                <Button size={"round"} onclick={()=>dispatch(deleteItem(idx))} inner={"×"}/>
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
                        <div className={classes.address}>
                            <input type="text" placeholder={"Полный адрес"}/>
                            <p className={classes.free}>доставка по снг бесплатная</p>
                        </div>
                        <div>
                            <div className={classes.promocode}>
                                <input type="text" placeholder={"Промокод"}/>
                                <Button inner={"активировать"} size={"small"}/>
                            </div>
                        </div>
                        <Button inner={"оформить заказ"} size={"small100"}/>
                        {/*<button className={classes.checkout}>оформить заказ</button>*/}
                    </div>
                </div>
            </div>
        </>

    );
};

export default Order;