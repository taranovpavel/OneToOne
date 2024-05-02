import React from 'react';
import Select from '@mui/material/Select';
import {useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const MultipleSelector = ({size,setSize,data}) => {
    const [open, setOpen] = useState(false);
    let newData = []
    for(const key in data){newData.push(key)}
    return (
        <div>
            <FormControl>
                <InputLabel>Размер</InputLabel>
                <Select
                    open={open}
                    onClose={()=>setOpen(false)}
                    onOpen={()=>setOpen(true)}
                    value={size}
                    label="Размер"
                    onChange={(event)=>setSize(event.target.value)}
                >
                    {newData.map((item,idx)=> <MenuItem key={idx} disabled={!data[item]} value={item}>{item}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    );
};

export default MultipleSelector;