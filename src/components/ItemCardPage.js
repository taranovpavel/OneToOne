import React from 'react';
import ItemCard from "./ItemCard";

const ItemCardPage = ({type}) => {
    const test = [
        {
            name: "Samba Classic",
            price: "90$",
            brand: "Adidas",
            typee: "SHOES",
            url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60cd4a11b6945599e15a81a017fb25f_9366/Samba_Classic_Black_034563_01_standard.jpg",
        },
        {
            name: "Samba Classic",
            price: "90$",
            brand: "Adidas",
            typee: "SHOES",
            url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60cd4a11b6945599e15a81a017fb25f_9366/Samba_Classic_Black_034563_01_standard.jpg",
        },
        {
            name: "Samba Classic",
            price: "90$",
            brand: "Adidas",
            typee: "SHOES",
            url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60cd4a11b6945599e15a81a017fb25f_9366/Samba_Classic_Black_034563_01_standard.jpg",
        },
        {
            name: "Samba Classic",
            price: "90$",
            brand: "Adidas",
            typee: "SHOES",
            url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60cd4a11b6945599e15a81a017fb25f_9366/Samba_Classic_Black_034563_01_standard.jpg",
        },
        {
            name: "Samba Classic",
            price: "90$",
            brand: "Adidas",
            typee: "SHOES",
            url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60cd4a11b6945599e15a81a017fb25f_9366/Samba_Classic_Black_034563_01_standard.jpg",
        },
        {
            name: "Samba Classic",
            price: "90$",
            brand: "Adidas",
            typee: "SHOES",
            url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60cd4a11b6945599e15a81a017fb25f_9366/Samba_Classic_Black_034563_01_standard.jpg",
        },
        {
            name: "Samba Classic",
            price: "90$",
            brand: "Adidas",
            typee: "SHOES",
            url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60cd4a11b6945599e15a81a017fb25f_9366/Samba_Classic_Black_034563_01_standard.jpg",
        },
        {
            name: "Samba Classic",
            price: "90$",
            brand: "Adidas",
            typee: "SHOES",
            url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60cd4a11b6945599e15a81a017fb25f_9366/Samba_Classic_Black_034563_01_standard.jpg",
        },
    ]
    return (
        <>
            {type === "ALL"?<>{test.map((item,idx) =><ItemCard key={idx} clothes={item}/>)}</>:<>{test.map((item,idx) =>item.typee===type?<ItemCard key={idx} clothes={item}/>:"")}</>}
        </>
    );
};

export default ItemCardPage;