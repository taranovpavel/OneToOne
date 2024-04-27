import React from 'react';
import{Tabs, Tab} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setTab} from "../redux/ItemsSlice";
const TabsComponent = ({categoriesSelect,setInput,valueKey= "value", labelKey = "label"}) => {
    const {tab} = useSelector(state => state.itemsReducer)
    const dispatch = useDispatch()
    const handleChange = (event,newValue) =>{
        dispatch(setTab(newValue))
        setInput("")
    }
    return (
        <div style={{margin: "15px 0"}}>
            <Tabs
                centered
                value={tab}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                variant="scrollable"
                scrollButtons="auto"
            >
                {categoriesSelect.map((tab)=>
                    <Tab
                        key={tab[valueKey]}
                        value={tab[valueKey]}
                        label={tab[labelKey]}
                    ></Tab>
                )}
            </Tabs>
        </div>
    );
};

export default TabsComponent;