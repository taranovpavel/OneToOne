import {createSlice} from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: "postSlice",
    initialState: {
        items: [],
        isModal: false,
        table: {}
    },
    reducers:{
        addItem:(state, action)=>{
            if (state.items.length===0){
                state.items = [...state.items,action.payload]
            }else{

                let isRepeat = false
                for(let i = 0; i<state.items.length;i++){
                    if ((state.items[i].url===action.payload.url)&&(state.items[i].size===action.payload.size)){
                        if (state.items[i].isDelete===true){
                            state.items[i].isDelete = false
                            state.items[i].value = 1
                        }else{
                            state.items[i].value+=1
                        }
                        isRepeat = true
                    }
                }
                if (isRepeat===false){
                    state.items = [...state.items,action.payload]
                }
            }
        },
        setModalOrder:(state,action)=>{
            if (action.payload===true){
                state.isModal = state.items.length > 0;
            }else{
                state.isModal = false
            }
        },
        plusValue:(state,action)=>{
            state.items[action.payload].value += 1
        },
        minusValue:(state,action)=>{
            if (state.items[action.payload].value!==1){
                state.items[action.payload].value -= 1
            }
        },
        deleteItem:(state,action)=>{
            state.items[action.payload].isDelete = true
            state.items = state.items.filter((obj) => obj.isDelete !== true)
        },
    }
})
export const {addItem,setModalOrder,deleteItem, minusValue,plusValue} = itemsSlice.actions
export default itemsSlice.reducer