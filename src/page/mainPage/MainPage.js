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
    const {tab} = useSelector(state => state.itemsReducer)
    const [input, setInput] = useState("")
    return (
        <>
            <Header input={input} setInput={setInput} isSearch={true}/>
            <Container inner={
                <>
                    <TabsComponent categoriesSelect={categoriesSelect} setInput={setInput}/>
                    <GetCategories action={input===""?tab:input} isSearch={input !== ""}/>
                </>
            }/>
            <Footer/>
        </>
    );
};

export default MainPage;