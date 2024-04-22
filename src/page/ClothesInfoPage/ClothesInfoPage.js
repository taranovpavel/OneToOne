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
                    <SwiperComponent image1={clothes.URL_1} image2={clothes.URL_2} image3={clothes.URL_3} swiperClasses={"swiperBig"} imageClasses={"imageBig"}/>
                    <div className={classes.text}>
                        <p className={classes.name}>{clothes.NAME} {clothes.BRAND}</p>
                        <p className={classes.price}>{clothes.PRICE}</p>
                        <MultipleSelector size={size} setSize={setSize} data={clothes.SIZE}/>
                        <Button inner={"BUY NOW"}></Button>
                        <p className={classes.Description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto commodi consequatur cum debitis dolor doloribus eos error est exercitationem facere facilis in inventore iure laboriosam magni nisi nulla odio officia, perspiciatis possimus quibusdam quidem quod ratione saepe sapiente, tempora.</p>
                        <p className={classes.composition}>Состав: {clothes.COMPOSITION_RUS}</p>
                        <p className={classes.secondaryText}>Количество ограничено</p>
                        <p className={classes.secondaryText}>Доставка заказа займет от 2 до 3 дней</p>
                        <p className={classes.secondaryText}>Если есть дополнительные вопросы напишите в <a href="">поддержку</a>.</p>
                    </div>
                </>
            }/>
            <Footer></Footer>
        </>
    );
};

export default ClothesInfoPage;