import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice(
    {
        name:"movies",
        initialState:{
            nowPlaying:null,
            trailerVideo:null,
            popular:null,
            topRated:null,
            upcoming:null
        },
        reducers:{
            addnowPlaying:(state,action)=>{
              state.nowPlaying=action.payload
            },
            addTrailerVideo:(state,action)=>{
                state.trailerVideo=action.payload
            },
            addPopular:(state,action)=>{
                state.popular=action.payload;
            },
            addTopRated:(state,action)=>{
                state.topRated=action.payload
            },
            addUpcoming:(state,action)=>{
                state.upcoming=action.payload
            }
        }
    }
)

export const {addnowPlaying, addTrailerVideo,addPopular,addTopRated,addUpcoming}=movieSlice.actions
export default movieSlice.reducer