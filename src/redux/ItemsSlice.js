import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getPost = createAsyncThunk(
    "getPost",
    async function(text,{dispatch}){
        const response= await fetch(`https://api.telegram.org/bot6990935703:AAEgSTluzPSGkpm2WXQFk6Se7gax7_Be2TI/sendMessage?chat_id=-4114695078&text=${text}`)
    }
)

const itemsSlice = createSlice({
    name: "postSlice",
    initialState: {
        items: [],
        isModal: false,
        isThank: false,
        table: {},
        tab: "ALL",
        isRandom: false,
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
            }else if(action.payload===false){
                state.isModal = state.items.length !== 0;
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
        setTab:(state,action)=>{
            state.tab = action.payload
        },
        deleteItems:(state,action)=>{
            state.items = []
        },
        setThank:(state,action)=>{
            if (action.payload===true){
                state.isThank = true
            }else{
                state.isThank = false
            }
        },
        setRandom:(state,action)=>{
            state.isRandom = true
        }
    }
})
export const {setRandom,setThank,deleteItems,setTab,addItem,setModalOrder,deleteItem, minusValue,plusValue} = itemsSlice.actions
export default itemsSlice.reducer