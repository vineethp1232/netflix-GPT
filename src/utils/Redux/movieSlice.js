import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice(
    {
        name:"movies",
        initialState:{
            nowPlaying:null,
            trailerVideo:null
        },
        reducers:{
            addnowPlaying:(state,action)=>{
              state.nowPlaying=action.payload
            },
            addTrailerVideo:(state,action)=>{
                state.trailerVideo=action.payload
            }
        }
    }
)

export const {addnowPlaying, addTrailerVideo}=movieSlice.actions
export default movieSlice.reducer