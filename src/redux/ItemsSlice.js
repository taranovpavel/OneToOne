import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getPost = createAsyncThunk(
    "getPost",
    async function(text,{dispatch}){
        await fetch(`https://api.telegram.org/bot6990935703:AAEgSTluzPSGkpm2WXQFk6Se7gax7_Be2TI/sendMessage?chat_id=-4114695078&text=${text}`)
    }
)

const itemsSlice = createSlice({
    name: "postSlice",
    initialState: {
        items: [],
        isModal: false,
        isThank: false,
        tab: "ALL",
        isRandom: false,
        brand: "AMIRI",
        isRUS: true,
        RUB: 95,
        limit: 6
    },
    reducers:{
        addItem:(state, action)=>{
            if (state.items.length===0){state.items = [...state.items,action.payload]}
            else{
                let isRepeat = false
                for(let i = 0; i<state.items.length;i++){
                    if ((state.items[i].url===action.payload.url)&&(state.items[i].size===action.payload.size)){
                        if (state.items[i].isDelete===true){
                            state.items[i].isDelete = false
                            state.items[i].value = 1}
                        else{state.items[i].value+=1}
                        isRepeat = true
                    }
                }
                if (isRepeat===false){state.items = [...state.items,action.payload]}
            }
        },
        setModalOrder:(state,action)=>{
            if (action.payload===true){state.isModal = state.items.length > 0}
            else if(action.payload===false){state.isModal = state.items.length !== 0}
            else{state.isModal = false}
        },
        plusValue:(state,action)=>{state.items[action.payload].value += 1},
        minusValue:(state,action)=>{if (state.items[action.payload].value!==1){state.items[action.payload].value -= 1}},
        deleteItem:(state,action)=>{
            state.items[action.payload].isDelete = true
            state.items = state.items.filter((obj) => obj.isDelete !== true)
        },
        deleteItems:(state)=>{state.items=[]},
        setTab:(state,action)=>{state.tab = action.payload},
        setThank:(state,action)=>{state.isThank = action.payload === true;},
        setRandom:(state)=>{state.isRandom = true},
        setBrand:(state,action)=>{state.brand = action.payload},
        setIsRUS:(state)=>{state.isRUS = !state.isRUS},
        setLimit:(state,action)=>{state.limit = action.payload}
    }
})
export const {setLimit,setIsRUS,setBrand,setRandom,setThank,setTab,addItem,setModalOrder,deleteItem,deleteItems, minusValue,plusValue} = itemsSlice.actions
export default itemsSlice.reducer