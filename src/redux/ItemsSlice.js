import {createSlice} from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: "postSlice",
    initialState: {
        items: [],
        isModal: false
    },
    reducers:{
        addItem:(state, action)=>{
            state.items = [...state.items,action.payload]
        },
        setModalOrder:(state,action)=>{
            if (action.payload===true){
                state.isModal = state.items.length > 0;
            }else{
                state.isModal = false
            }
        }
    }
})
export const {addItem,setModalOrder} = itemsSlice.actions
export default itemsSlice.reducer