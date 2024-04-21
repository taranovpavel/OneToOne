import React from 'react';
import {useParams} from "react-router-dom";
import data from '../../data/clothes.json'
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ClothesInfoPage = () => {
    const {id} = useParams()
    const clothes = data[id-1]
    return (
        <>
            <Header></Header>
            <Container classname={"flex"} inner={
                <>
                    <p>{clothes.NAME}</p>
                    <p>{clothes.TYPE}</p>
                    <p>{clothes.TYPE_RUS}</p>
                    <p>{clothes.PRICE}</p>
                    <p>{clothes.BRAND}</p>
                </>
            }/>
            <Footer></Footer>
        </>
    );
};

export default ClothesInfoPage;