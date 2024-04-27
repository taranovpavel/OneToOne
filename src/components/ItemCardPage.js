import React from 'react';
import ItemCard from "./ItemCard";
import data from '../data/clothes.json'
import randomData from '../data/randonClothes.json'
import NothingFoundPage from "./NothingFoundPage";
import {useDispatch, useSelector} from "react-redux";
import {setRandom} from "../redux/ItemsSlice";
const ItemCardPage = ({type, isSearch}) => {
    let dataFilter
    const {isRandom} = useSelector(state => state.itemsReducer)
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
    if (isSearch===true){
        dataFilter =  randomData.filter(item=> (item.NAME.toLowerCase()+item.BRAND.toLowerCase()).includes(type.toLowerCase()))
    }
    return (
        <>
            {isSearch?
                dataFilter.length>0?
                    <>{dataFilter.map((item,idx) =><ItemCard key={idx} clothes={item}/>)}</>:
                    <NothingFoundPage/>:
                type === "ALL"?
                    <>{randomData.map((item,idx) =>item.TYPE!=="SHOES"?<ItemCard key={idx} clothes={item}/>:"")}</>:
                    <>{randomData.map((item,idx) =>item.TYPE===type?<ItemCard key={idx} clothes={item}/>:"")}</>}
        </>
    );
};

export default ItemCardPage;