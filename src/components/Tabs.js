import React from 'react';
import{Tabs, Tab} from "@mui/material";
const TabsComponent = ({categoriesSelect, value ,setValue,setInput,valueKey= "value", labelKey = "label"}) => {
    const handleChange = (event,newValue) =>{
        setValue(newValue)
        setInput("")
    }
    return (
        <div style={{margin: "15px 0"}}>
            <Tabs
                centered
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
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