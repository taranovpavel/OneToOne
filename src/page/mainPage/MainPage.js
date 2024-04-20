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
    const test = [
        {
            name: "Samba Classic",
            price: "90$",
            brand: "Adidas",
            type: "Обувь",
            url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60cd4a11b6945599e15a81a017fb25f_9366/Samba_Classic_Black_034563_01_standard.jpg",
        },
        {
            name: "Samba Classic",
            price: "90$",
            brand: "Adidas",
            type: "Обувь",
            url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60cd4a11b6945599e15a81a017fb25f_9366/Samba_Classic_Black_034563_01_standard.jpg",
        },
        {
            name: "Samba Classic",
            price: "90$",
            brand: "Adidas",
            type: "Обувь",
            url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60cd4a11b6945599e15a81a017fb25f_9366/Samba_Classic_Black_034563_01_standard.jpg",
        },
        {
            name: "Samba Classic",
            price: "90$",
            brand: "Adidas",
            type: "Обувь",
            url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60cd4a11b6945599e15a81a017fb25f_9366/Samba_Classic_Black_034563_01_standard.jpg",
        },
        {
            name: "Samba Classic",
            price: "90$",
            brand: "Adidas",
            type: "Обувь",
            url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60cd4a11b6945599e15a81a017fb25f_9366/Samba_Classic_Black_034563_01_standard.jpg",
        },
        {
            name: "Samba Classic",
            price: "90$",
            brand: "Adidas",
            type: "Обувь",
            url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60cd4a11b6945599e15a81a017fb25f_9366/Samba_Classic_Black_034563_01_standard.jpg",
        },
        {
            name: "Samba Classic",
            price: "90$",
            brand: "Adidas",
            type: "Обувь",
            url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60cd4a11b6945599e15a81a017fb25f_9366/Samba_Classic_Black_034563_01_standard.jpg",
        },
        {
            name: "Samba Classic",
            price: "90$",
            brand: "Adidas",
            type: "Обувь",
            url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60cd4a11b6945599e15a81a017fb25f_9366/Samba_Classic_Black_034563_01_standard.jpg",
        },
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
    const {posts} = useSelector(state => state.MainSlice)
    console.log(posts)
    return (
        <>
            <Header></Header>
            <SwiperComponent swiperImages={images}></SwiperComponent>
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