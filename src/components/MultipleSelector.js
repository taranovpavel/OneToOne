import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MultipleSelector = ({size,setSize,data}) => {
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
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
                >
                    <MenuItem disabled={!data.XS} value={"XS"}>XS</MenuItem>
                    <MenuItem disabled={!data.S} value={"S"}>S</MenuItem>
                    <MenuItem disabled={!data.M} value={"M"}>M</MenuItem>
                    <MenuItem disabled={!data.L} value={"L"}>L</MenuItem>
                    <MenuItem disabled={!data.XL} value={"XL"}>XL</MenuItem>
                    <MenuItem disabled={!data.XXL}value={"XXL"}>XXL</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default MultipleSelector;