import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import data from '../../data/clothes.json'
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SwiperComponent from "../../components/SwiperComponent";
import classes from "./ClothesInfoPage.module.sass";
import Button from "../../components/Button";
import MultipleSelector from "../../components/MultipleSelector";
import TableComponent from "../../components/TableComponent";
import {useDispatch, useSelector} from "react-redux";
import {addItem, setModalOrder} from "../../redux/ItemsSlice";
import NothingFoundPage from "../../components/NothingFoundPage";

const ClothesInfoPage = () => {
    const {items, isRUS, RUB} = useSelector(state => state.itemsReducer)
    const dispatch = useDispatch()
    const {id} = useParams()
    const clothes = data[id-1]
    window.scrollTo(0, 0)

    const sizeFunction = () =>{
        for(const key in clothes.SIZE){if (clothes.SIZE[key]===true){return(key)}}
    }

    const [size,setSize] = useState(sizeFunction)
    console.log(size)
    const addItemAction = () => {
        if (clothes.SPECIAL){
            dispatch(addItem({
                url: clothes.PHOTOS[0],
                name: clothes.TYPE==="SHOES"?clothes.NAME:clothes.TYPE_ENG,
                fullName: clothes.NAME,
                brand: clothes.BRAND,
                id: clothes.ID,
                size: size,
                price: clothes.NEW_PRICE,
                value: 1,
                isDelete: false,
            }))
        }else{
            dispatch(addItem({
                url: clothes.PHOTOS[0],
                name: clothes.TYPE==="SHOES"?clothes.NAME:clothes.TYPE_ENG,
                fullName: clothes.NAME,
                brand: clothes.BRAND,
                id: clothes.ID,
                size: size,
                price: clothes.PRICE,
                value: 1,
                isDelete: false,
            }))
        }
        dispatch(setModalOrder(true))
    }
    return (
        <>
            <Header items={items}/>
            <Container classname={"flex"} inner={
                <>
                    {clothes.ID===0?<NothingFoundPage/>:
                        <>
                        <SwiperComponent photos={clothes.PHOTOS} swiperClasses={"swiperBig"} imageClasses={"imageBig"} autoplay={true}/>
                            <div className={classes.text}>
                                <p className={classes.text__name}>{clothes.TYPE === "SHOES" ? clothes.NAME : clothes.TYPE_ENG} {clothes.BRAND}</p>
                                {clothes.SPECIAL?<div className={classes.text__price__container}><p className={classes.text__price__container__new}>{isRUS?clothes.NEW_PRICE*RUB+"₽":"$"+clothes.NEW_PRICE}</p><p className={classes.text__price__container__old}>{isRUS ? clothes.PRICE * RUB + "₽" : "$" + clothes.PRICE}</p></div>:<p className={classes.text__price}>{isRUS ? clothes.PRICE * RUB + "₽" : "$" + clothes.PRICE}</p>}
                                <div className={classes.text__buttons}>
                                    <Button onclick={addItemAction} inner={isRUS?"КУПИТЬ":"BUY"}></Button>
                                    <MultipleSelector size={size} setSize={setSize} data={clothes.SIZE}/>
                                </div>
                                <p className={classes.text__secondary}>{isRUS?"Бесплатная доставка по СНГ":"Free delivery to Russia, Ukraine, Belarus, Kyrgyzstan, Kazakhstan, Tajikistan, Uzbekistan, Turkmenistan, Azerbaijan, Armenia"}</p>
                                <p className={classes.text__secondary}>{isRUS?"14 - 18 дней до склада, после переотправка в вашу страну":"14-18 days to the warehouse, after reshipment to your country"}<br/>{isRUS?"( в общей сложности 14-30 дней )":"(total 14-30 days)"}</p>
                                <p className={classes.text__secondary}>{isRUS?"Наши отзывы можно посмотреть ":"You can see our reviews "}<a href="https://t.me/reviewscrips">{isRUS?"здесь":"here"}</a>.</p>
                                <p className={classes.text__secondary}>{isRUS?"Если есть дополнительные вопросы напишите в ":"If you have additional questions, write to "}<a href="https://t.me/onet00ne">{isRUS?"поддержку":"support"}</a>.</p>
                                {size!=="OS"?clothes.TYPE!=="SHOES"?<TableComponent rows={isRUS?clothes.SIZE_TABLE_RUS:clothes.SIZE_TABLE_ENG}/>:"":""}
                            </div>
                        </>
                    }
                </>
            }/>
            <Footer/>
        </>
    );
};

export default ClothesInfoPage;