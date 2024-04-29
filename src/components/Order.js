import React, {useState} from 'react';
import classes from "./Order.module.sass";
import { ReactComponent as Cross} from "../images/icon-cross.svg"
import promocodes from '../data/promocodes.json'
import {useDispatch, useSelector} from "react-redux";
import {deleteItem, deleteItems, getPost, minusValue, plusValue, setModalOrder, setThank} from "../redux/ItemsSlice";
import Button from "./Button";
import ThankYou from "./ThankYou";

const Order = () => {
    const {items,isModal,isThank,isRUS,RUB} = useSelector(state => state.itemsReducer)
    const email_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const number_REGEXP = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    const fullName_REGEXP = /[^!@#$%]{10}/
    const telegram_REGEXP = /.*\B@(?=\w{5,64}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.*/
    const index_REGEXP = /^\d{2}/
    const dispatch = useDispatch()
    let totalPrice = 0
    for(const item in items){totalPrice += items[item].price*items[item].value}
    const deleteItemActions = (idx) =>{
        dispatch(deleteItem(idx))
        dispatch(setModalOrder(false))
    }
    const [data, setData] = useState({
        fullName: "",
        number:"",
        telegram:"",
        email:"",
        index:"",
        address:"",
    })
    const [classNames, setClassNames] = useState({
        fullName: "error",
        number:"error",
        telegram:"error",
        email:"error",
        index:"error",
        address:"error",
    })
    const [inputPromocode,setPromocode] = useState("")
    const [discount,setDiscount] = useState(1)
    totalPrice*= discount
    const formValue = (event) => {
        let newClass = ""
        if (event.target.name==="fullName"){
            if(fullName_REGEXP.test([event.target.value])){newClass = "good"}else{newClass = "error"}
        }else if (event.target.name==="number"){
            if(number_REGEXP.test([event.target.value])){newClass = "good"}else{newClass = "error"}
        }else if (event.target.name==="telegram"){
            if(telegram_REGEXP.test([event.target.value])){newClass = "good"}else{newClass = "error"}
        }else if (event.target.name==="email"){
            if(email_REGEXP.test([event.target.value])){newClass = "good"}else{newClass = "error"}
        }else if (event.target.name==="index"){
            if(index_REGEXP.test([event.target.value])){newClass = "good"}else{newClass = "error"}
        }else if (event.target.name==="address"){
            if(event.target.value.length>8){newClass = "good"}else{newClass = "error"}
        }
        setClassNames({
            ...classNames,
            [event.target.name]: newClass
        })
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    let overflow = (isModal === true) || (isThank === true);
    document.body.style.overflow = overflow?"hidden":"visible"
    const getPostActions = () =>{
        let errors = 0
        for(const key in classNames){
            console.log(classNames[key])
            if (classNames[key]==="error"){errors+=1}
        }
        if (errors===0)
        {
            dispatch(getPost(`ФИО:  ${data.fullName}%0AНомер:  ${data.number}%0AТелеграм:  ${data.telegram}%0AПочта:  ${data.email}%0AПочтовый Индекс:  ${data.index}%0AПолный адрес:  ${data.address}%0AЦена заказа:  ${isRUS?totalPrice*RUB+"₽":"$"+totalPrice}`))
            items.map((item)=>dispatch(getPost(`Название:  ${item.fullName}%0AБренд:  ${item.brand}%0AКоличество:  ${item.value}%0AРазмер:  ${item.size}`)))
            dispatch(deleteItems())
            dispatch(setModalOrder())
            dispatch(setThank(true))
        }
    }
    const activetePromocode = () =>{
        for(const item in promocodes){
            if((inputPromocode.toUpperCase()===promocodes[item].promocode.toUpperCase())){setDiscount(0.9)}
        }
    }
    return (
        <>
            <ThankYou/>
            <Cross style={{display: `${isModal?"block":"none"}`}} onClick={()=>dispatch(setModalOrder())} className={classes.cross}/>
            <div onClick={()=>dispatch(setModalOrder())} style={{display: `${isModal?"block":"none"}`}} className={classes.background}></div>
            <div style={{display: `${isModal?"block":"none"}`}} className={classes.orderModal}>
                <div className={classes.order}>


                    <button onClick={()=>dispatch(setThank(true))}>THANK</button>


                    <p className={classes.label}>{isRUS?"Ваш заказ":"Your order"}</p>
                    <div className={classes.orders}>
                        {items.map((item,idx)=>
                            <div className={classes.items} key={idx}>
                                <div className={classes.left}>
                                    <div className={classes.image} style={{backgroundImage: `url(${item.url})`}}/>
                                    <div className={classes.text}>
                                        <p className={classes.name}>{item.brand} {item.name}</p>
                                        <p>{isRUS?"Размер":"Size"}: {item.size}</p>
                                        <p>{isRUS?"Цена: ":"Price: $"}{isRUS?item.price * item.value * RUB:item.price * item.value}{isRUS?"₽":""}</p>
                                        <div className={classes.value_small}>
                                            <Button size={"round"} onclick={() => dispatch(minusValue(idx))}
                                                    inner={"-"}/>
                                            <p>{item.value}</p>
                                            <Button size={"round"} onclick={() => dispatch(plusValue(idx))}
                                                    inner={"+"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.value_big}>
                                    <Button size={"round"} onclick={() => dispatch(minusValue(idx))} inner={"-"}/>
                                    <p>{item.value}</p>
                                    <Button size={"round"} onclick={() => dispatch(plusValue(idx))} inner={"+"}/>
                                </div>
                                <div className={classes.bigCross}><Button size={"round"} onclick={()=>deleteItemActions(idx)} inner={"×"}/></div>
                                <Button size={"round_cross"} onclick={()=>deleteItemActions(idx)} inner={"×"}/>
                            </div>
                        )}
                    </div>
                    <p className={classes.price}>{isRUS?"Итого: ":"Total: $"}{isRUS?totalPrice*RUB:totalPrice}{isRUS?"₽":""}</p>
                    <div className={"inputs"}>
                        <input className={classNames.fullName} onChange={formValue} name="fullName" type="text" placeholder={isRUS?"Ф.И.О":"Full name"}/>
                        <input className={classNames.number} onChange={formValue} name="number" type="text" placeholder={isRUS?"Номер":"Number"}/>
                        <input className={classNames.telegram} onChange={formValue} name="telegram" type="text" placeholder={"Telegram"}/>
                        <input className={classNames.email} onChange={formValue} name="email" type="text" placeholder={"e-mail"}/>
                        <input className={classNames.index} onChange={formValue} name="index" type="text" placeholder={isRUS?"Почтовый индекс":"Postcode"}/>
                        <div className={classes.address}>
                            <input className={classNames.address} onChange={formValue} name="address" type="text" placeholder={isRUS?"Полный адрес":"Address"}/>
                            <p className={classes.free}>{isRUS?"Бесплатная доставка по СНГ":"Free delivery to CIS"}</p>
                        </div>
                        <div className={classes.promocode}>
                            <input onChange={(event)=>setPromocode(event.target.value)} type="text" placeholder={isRUS?"Промокод":"Promo code"}/>
                            <Button onclick={activetePromocode} inner={isRUS?"активировать":"activate"} size={"small"}/>
                        </div>
                        <Button onclick={getPostActions} inner={isRUS?"оформить заказ":"Make an order"} size={"small100"}/>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Order;