import React, {useState} from 'react';
import ItemCard from "./ItemCard";
import Brands from "./Brands";
import NothingFoundPage from "./NothingFoundPage";
import {useDispatch, useSelector} from "react-redux";
import {setLimit, setRandom} from "../redux/ItemsSlice";
import randomData from '../data/randomClothes.json'

const ItemCardPage = ({type, isSearch}) => {
    const {isRandom, brand,limit} = useSelector(state => state.itemsReducer)
    const [max,setMax] = useState(limit)
    const dispatch = useDispatch()

    function shuffle(arr) {
        if (isRandom === false) {
            var j, temp
            for (var i = arr.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1))
                temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
            dispatch(setRandom())
            return arr;
        }
    }

    // shuffle(randomData)

    let dataFilter = []
    if (isSearch === true) {dataFilter = randomData.filter(item => (item.NAME.toLowerCase() + item.BRAND.toLowerCase()).includes(type.toLowerCase()))}
    else if(type==="ALL"){dataFilter = randomData.filter(item =>(item.TYPE!=="SHOES"))}
    else if(type==="BRANDS"){dataFilter = randomData.filter(item=>(item.BRAND.toUpperCase()).includes(brand))}
    else if(type==="SPECIALS"){dataFilter = randomData.filter(item=>(item.SPECIAL===true))}
    else {dataFilter = randomData.filter(item =>(item.TYPE).includes(type))}
    const scroll = (event) => {if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 600){if (dataFilter.length>max)setMax(max+12)}}
    document.addEventListener('scroll', scroll)
    if (limit<max){dispatch(setLimit(max))}
    return (
        <>
            {type === "BRANDS" ? <Brands/> : ""}
            {dataFilter.length > 0 ? <>{dataFilter.slice(0,max).map((item, idx) => <ItemCard key={idx} clothes={item}/>)}</> : <NothingFoundPage/>}
        </>
    );
};

export default ItemCardPage;