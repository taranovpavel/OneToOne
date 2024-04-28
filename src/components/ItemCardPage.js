import React, {useState} from 'react';
import ItemCard from "./ItemCard";
import randomData from '../data/randonClothes.json'
import NothingFoundPage from "./NothingFoundPage";
import {useDispatch, useSelector} from "react-redux";
import {setRandom} from "../redux/ItemsSlice";
import Brands from "./Brands";
const ItemCardPage = ({type, isSearch}) => {
    let dataFilter = []
    let dataLoad = []
    const {isRandom, brand} = useSelector(state => state.itemsReducer)
    const dispatch = useDispatch()
    const [load,setLoad] = useState(9)
    function shuffle(arr) {
        if (isRandom === false) {
            var j, temp;
            for (var i = arr.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
            dispatch(setRandom())
            return arr;
        }
    }
    // shuffle(randomData)
    if (isSearch === true) {
        dataFilter = randomData.filter(item => (item.NAME.toLowerCase() + item.BRAND.toLowerCase()).includes(type.toLowerCase()))
    }
    const scroll = (event) => {
        if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 1000){
            if (load+20 > randomData.length-1) {
                setLoad(randomData.length-1)
            }else if(type==="ALL"){
                setLoad(load+20)
            }
        }
    }
    document.addEventListener('scroll', scroll)
    for (let i = 0; i < load; i++) {
        dataLoad.push(randomData[i])
    }
    console.log(dataLoad)
    return (
        <>
            {type === "BRANDS" ? <Brands/> : ""}
            {isSearch ?
                dataFilter.length > 0 ?
                    <>{dataFilter.map((item, idx) => <ItemCard key={idx} clothes={item}/>)}</> :
                    <NothingFoundPage/> :
                type === "BRANDS" ? <>{randomData.map((item, idx) =>item.BRAND.toUpperCase()===brand?<ItemCard key={idx} clothes={item}/>:"")}</> :
                    type === "ALL" ?
                        <>{dataLoad.map((item, idx) => item.TYPE !== "SHOES" ?
                            <ItemCard key={idx} clothes={item}/> : "")}</> :
                        type === "SPECIALS" ?
                            <>{randomData.map((item, idx) => item.SPECIAL === true ?
                                <ItemCard key={idx} clothes={item}/> : "")}</> :
                            <>{randomData.map((item, idx) => item.TYPE === type ?
                                <ItemCard key={idx} clothes={item}/> : "")}</>}
        </>
    );
};

export default ItemCardPage;