import React from 'react';
import ItemCard from "./ItemCard";
import data from '../data/clothes.json'
const ItemCardPage = ({type}) => {
    return (
        <>
            {type === "ALL"?<>{data.map((item,idx) =><ItemCard key={idx} clothes={item}/>)}</>:<>{data.map((item,idx) =>item.TYPE===type?<ItemCard key={idx} clothes={item}/>:"")}</>}
        </>
    );
};

export default ItemCardPage;