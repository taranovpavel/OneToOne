import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import data from '../../data/clothes.json'
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SwiperComponent from "../../components/SwiperComponent";
import classes from "./ClothesInfoPage.module.css";
import Button from "../../components/Button";
import MultipleSelector from "../../components/MultipleSelector";

const ClothesInfoPage = () => {
    const {id} = useParams()
    const clothes = data[id-1]
    const sizeFunction = () =>{
        for(const key in clothes.SIZE){
            if (clothes.SIZE[key]===true){
                return(key)
            }
        }
    }
    const [size,setSize] = useState(sizeFunction)
    return (
        <>
            <Header></Header>
            <Container classname={"flex"} inner={
                <>
                    <SwiperComponent photos={clothes.PHOTOS} swiperClasses={"swiperBig"} imageClasses={"imageBig"} autoplay={true}/>
                    <div className={classes.text}>
                        <p className={classes.name}>{clothes.TYPE_RUS} {clothes.BRAND}</p>
                        <div className={classes.divPrice}>
                            <p className={classes.price}>${clothes.PRICE}</p>
                            <p className={classes.taxes}>Пошлины включены</p>
                        </div>
                        <MultipleSelector size={size} setSize={setSize} data={clothes.SIZE}/>
                        <Button inner={"BUY NOW"}></Button>
                        <p className={classes.composition}>Состав: {clothes.COMPOSITION_RUS}</p>
                        <p className={classes.secondaryText}>Количество ограничено</p>
                        <p className={classes.secondaryText}>14-18 дней до склада, после переотправка в вашу страну <br/>( в общей сложности 14-30 дней )</p>
                        <p className={classes.secondaryText}>Если есть дополнительные вопросы напишите в <a href="">поддержку</a>.</p>
                    </div>
                </>
            }/>
            <Footer></Footer>
        </>
    );
};

export default ClothesInfoPage;