import React, {useState} from 'react';
import Header from "../../components/Header";
import SwiperComponent from "../../components/SwiperComponent";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import TabsComponent from "../../components/Tabs";
import ItemCardPage from "../../components/ItemCardPage";
import {useSelector} from "react-redux";

const GetCategories=({action})=>{
    return <Container classname={"flex"} inner={<ItemCardPage type={action}/>}/>
}
const MainPage = () => {

    const images = [// УДАЛИТЬ НА ХУЙ
        {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png"},
        {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png"},
        {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png"},
        {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png"},
        {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png"},
        {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png"},
        {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png"},
        {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png"},
    ]
    const categoriesSelect = [
        {value: "ALL",label:"Все"},
        {value: "T-SHIRTS",label:"Футболки"},
        {value: "HOODIES",label:"Худи / Свитеры"},
        {value: "PANTS",label:"Брюки / Шорты"},
        {value: "JACKETS",label:"Куртки"},
        {value: "SHOES",label:"Обувь"},
        {value: "ACCESSORIES",label:"Аксессуары"},
        {value: "SPECIALS",label:"Скидки"}
    ]
    const [value,setValue] = useState(categoriesSelect?.[0].value)
    return (
        <>
            <Header></Header>
            <Container inner={
                <>
                    <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue}/>
                    <GetCategories action={value}/>
                </>
            }/>
            <Footer></Footer>
        </>
    );
};

export default MainPage;