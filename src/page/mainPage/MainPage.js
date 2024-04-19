import React from 'react';
import Header from "../../components/Header";
import SwiperComponent from "../../components/SwiperComponent";
import ItemCard from "../../components/ItemCard";
import Container from "../../components/Container";


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
    ]
    return (
        <>
            <Header></Header>
            <SwiperComponent swiperImages={images}></SwiperComponent>
            <Container inner={<h2>покупай сука</h2>}/>
            <Container classname={"flex"} inner={test.map((item,idx) => <ItemCard key={idx} clothes={item}/>)}/>
        </>
    );
};

export default MainPage;