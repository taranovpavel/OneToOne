import React, {useState} from 'react';
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import TabsComponent from "../../components/Tabs";
import ItemCardPage from "../../components/ItemCardPage";
import {useSelector} from "react-redux";


const GetCategories=({action, isSearch})=>{
    return <Container classname={"flex-wrap"} inner={<ItemCardPage type={action} isSearch={isSearch}/>}/>
}
const MainPage = () => {
    const {isRUS} = useSelector(state => state.itemsReducer)
    const categoriesSelect = [
        {value: "ALL",label:isRUS?"Все":"All"},
        {value: "T-SHIRTS",label:isRUS?"Футболки":"T-shirts"},
        {value: "HOODIES",label:isRUS?"Худи / Свитеры":"Hoodies / Sweaters"},
        {value: "PANTS",label:isRUS?"Брюки / Шорты":"Pants / Shorts"},
        {value: "JACKETS",label:isRUS?"Куртки":"Jackets"},
        {value: "SHOES",label:isRUS?"Обувь":"Shoes"},
        {value: "ACCESSORIES",label:isRUS?"Аксессуары":"Accessories"},
        {value: "BRANDS",label:isRUS?"Бренды":"Brands"},
        {value: "SPECIALS",label:isRUS?"Скидки":"Specials"}
    ]
    const {tab} = useSelector(state => state.itemsReducer)
    const [input, setInput] = useState("")
    return (
        <>
            <Header isFixed={true} input={input} setInput={setInput} isSearch={true}/>
            <Container inner={
                <>
                    <TabsComponent isFixed={true} categoriesSelect={categoriesSelect} setInput={setInput}/>
                    <GetCategories action={input!==""?input:tab} isSearch={input !== ""}/>
                </>
            }/>
            <Footer/>
        </>
    );
};

export default MainPage;