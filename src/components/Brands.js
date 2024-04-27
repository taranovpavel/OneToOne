import React from 'react';
import FormControl from '@mui/joy/FormControl';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import data from '../data/clothes.json'
import {useDispatch, useSelector} from "react-redux";
import {setBrand} from "../redux/ItemsSlice";
import Container from "./Container";

const Brands = () => {
    const {brand} = useSelector(state => state.itemsReducer)
    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(setBrand(event.target.value))
    };
    let brands = []
    for(const item in data){brands.push(data[item].BRAND.toUpperCase())}
    brands = brands.filter(function(item, pos) {return brands.indexOf(item) === pos;})
    brands = brands.sort((a, b) => a.localeCompare(b))
    let first_colum = []
    let second_colum = []
    let third_colum = []
    let forth_colum = []
    let fifth_colum = []
    let sixth_colum = []
    for (let i = 0;i<brands.length;i++){
        if(i<10){
            first_colum.push(brands[i])
        }else if(i<20){
            second_colum.push(brands[i])
        }else if(i<30){
            third_colum.push(brands[i])
        }else if(i<40){
            forth_colum.push(brands[i])
        }else if(i<50){
            fifth_colum.push(brands[i])
        }else if(i<60){
            sixth_colum.push(brands[i])
        }
    }
    return (
        <Container inner={
            <FormControl>
                <RadioGroup
                    value={brand}
                    onChange={handleChange}
                >
                    <div className={"colums"}>
                        <div className={"colum"}>
                            {first_colum.map((item, idx) => <Radio key={idx} value={item} label={item}/>)}
                        </div>
                        <div className={"colum"}>
                            {second_colum.map((item, idx) => <Radio key={idx} value={item} label={item}/>)}
                        </div>
                        <div className={"colum"}>
                            {third_colum.map((item, idx) => <Radio key={idx} value={item} label={item}/>)}
                        </div>
                        <div className={"colum"}>
                            {forth_colum.map((item, idx) => <Radio key={idx} value={item} label={item}/>)}
                        </div>
                        <div className={"colum"}>
                            {fifth_colum.map((item, idx) => <Radio key={idx} value={item} label={item}/>)}
                        </div>
                        <div className={"colum"}>
                            {sixth_colum.map((item, idx) => <Radio key={idx} value={item} label={item}/>)}
                        </div>
                    </div>
                </RadioGroup>
            </FormControl>
        }/>
    );
};

export default Brands;