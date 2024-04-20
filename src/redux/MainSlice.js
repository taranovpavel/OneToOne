import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getPost = createAsyncThunk(
    "getPost",
    async function(info,{dispatch}){
        const response= await fetch("http://localhost")
        const data = await response.json()
        dispatch(getPosts(data))
    }
)
const MainSlice = createSlice({
    name: "MainSlice",
    initialState: {
        posts: []
    },
    reducers:{
        getPosts:(state,action)=>{
            state.posts = action.payload
        }
    }
})
export const {getPosts} = MainSlice.actions
export default MainSlice.reducer