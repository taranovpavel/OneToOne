import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MultipleSelector = ({size,setSize,data}) => {
    const [open, setOpen] = React.useState(false);
    let newData = []
    for(const key in data){newData.push(key)}
    const handleChange = (event) => {setSize(event.target.value)}
    const handleClose = () => {setOpen(false)}
    const handleOpen = () => {setOpen(true)}
    return (
        <div>
            <FormControl>
                <InputLabel id="demo-controlled-open-select-label">Размер</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={size}
                    label="Размер"
                    onChange={handleChange}
                    indicatorColor="secondary"
                >
                    {newData.map((item,idx)=>
                        <MenuItem key={idx} disabled={!data[item]} value={item}>{item}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </div>
    );
};

export default MultipleSelector;