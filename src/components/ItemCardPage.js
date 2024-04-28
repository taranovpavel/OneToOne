import React from 'react';
import ItemCard from "./ItemCard";
import randomData from '../data/randonClothes.json'
import NothingFoundPage from "./NothingFoundPage";
import {useDispatch, useSelector} from "react-redux";
import {setRandom} from "../redux/ItemsSlice";
import Brands from "./Brands";
const ItemCardPage = ({type, isSearch}) => {
    let dataFilter
    const {isRandom,brand} = useSelector(state => state.itemsReducer)
    const dispatch = useDispatch()
    function shuffle(arr){
        if (isRandom===false){
            var j, temp;
            for(var i = arr.length - 1; i > 0; i--){
                j = Math.floor(Math.random()*(i + 1));
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
            dispatch(setRandom())
            return arr;
        }
    }
    shuffle(randomData)
    if (type==="BRANDS"){
        dataFilter =  randomData.filter(item=> (item.BRAND.toLowerCase()).includes(brand.toLowerCase()))
    }
    if (isSearch===true){
        dataFilter =  randomData.filter(item=> (item.NAME.toLowerCase()+item.BRAND.toLowerCase()).includes(type.toLowerCase()))
    }
    console.log(type)
    console.log(brand)
    return (
        <>
            {type==="BRANDS"?<Brands/>:""}
            {isSearch?
                dataFilter.length>0?
                    <>{dataFilter.map((item,idx) =><ItemCard key={idx} clothes={item}/>)}</>:
                    <NothingFoundPage/>:
                type === "BRANDS"?<>{dataFilter.map((item,idx) =><ItemCard key={idx} clothes={item}/>)}</>:
                    type === "ALL"?
                        <>{randomData.map((item,idx) =>item.TYPE!=="SHOES"?<ItemCard key={idx} clothes={item}/>:"")}</>:
                        type === "SPECIALS"?
                        <>{randomData.map((item,idx) =>item.SPECIAL===true?<ItemCard key={idx} clothes={item}/>:"")}</>:
                        <>{randomData.map((item,idx) =>item.TYPE===type?<ItemCard key={idx} clothes={item}/>:"")}</>}
        </>
    );
};

export default ItemCardPage;