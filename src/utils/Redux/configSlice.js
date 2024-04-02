import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        isGptSearch:false,
        lang:"en"
    },
    reducers:{
        gptSearch:(state)=>{
            return {...state,isGptSearch:!state.isGptSearch}
        },
        changeLanguage:(state,action)=>{
            state.lang=action.payload;
        }
    }

})

export  const {gptSearch,changeLanguage} =configSlice.actions
export default configSlice.reducer