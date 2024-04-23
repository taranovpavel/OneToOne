import {createSlice} from "@reduxjs/toolkit";

const MainSlice = createSlice({
    name: "MainSlice",
    initialState: {
        isModal: false
    },
    reducers:{
        setModalOrder:(state,action)=>{
            state.posts = action.payload
        }
    }
})
export const {setModalOrder} = MainSlice.actions
export default MainSlice.reducer