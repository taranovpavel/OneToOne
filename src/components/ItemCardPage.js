import React from 'react';
import ItemCard from "./ItemCard";
import data from '../data/clothes.json'
import randomData from '../data/randonClothes.json'
import NothingFoundPage from "./NothingFoundPage";
const ItemCardPage = ({type, isSearch}) => {
    let dataFilter
    if (isSearch===true){
        dataFilter =  data.filter(item=> (item.NAME.toLowerCase()+item.TYPE_ENG.toLowerCase()+item.TYPE_RUS.toLowerCase()+item.BRAND.toLowerCase()).includes(type.toLowerCase()))
    }
    function shuffle(arr){
        var j, temp;
        for(var i = arr.length - 1; i > 0; i--){
            j = Math.floor(Math.random()*(i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }
    let a = shuffle(randomData)
    console.log(data)
    console.log(randomData)
    return (
        <>
            {isSearch?
                dataFilter.length>0?
                    <>{dataFilter.map((item,idx) =><ItemCard key={idx} clothes={item}/>)}</>:
                    <NothingFoundPage/>:
                type === "ALL"?
                    <>{randomData.map((item,idx) =><ItemCard key={idx} clothes={item}/>)}</>:
                    <>{randomData.map((item,idx) =>item.TYPE===type?<ItemCard key={idx} clothes={item}/>:"")}</>}
        </>
    );
};

export default ItemCardPage;