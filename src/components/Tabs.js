import React from 'react';
import{Tabs, Tab} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setTab} from "../redux/ItemsSlice";
const TabsComponent = ({isFixed = false,categoriesSelect,setInput,valueKey= "value", labelKey = "label"}) => {
    const {tab} = useSelector(state => state.itemsReducer)
    const dispatch = useDispatch()
    const windowInnerWidth = window.innerWidth
    const handleChange = (event,newValue) =>{
        window.scrollTo(0, 0)
        dispatch(setTab(newValue))
        setInput("")
    }
    return (
        <div className={`${isFixed?"tabs_fixed":"tabs"}`}>
            <Tabs
                centered
                value={tab}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                variant={windowInnerWidth<961?"scrollable":"standard"}
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