import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice(
    {
        name:"movies",
        initialState:{
            nowPlaying:null,
            trailerVideo:null,
            popular:null,
            topRated:null,
            upcoming:null,
            searchText:null,
            searchResults:null,
            moviePopup:{
                isPopup:false,
                movieId:null
            },
            popupTrailer:null
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
            },
            addSearch:(state,action)=>{
                state.searchText=action.payload
            },
            addSearchResults:(state,action)=>{
                state.searchResults=action.payload
            },
            toggleMoviePopup:(state,action)=>{
                state.moviePopup.isPopup=action.payload.isPopup;
                state.moviePopup.movieId=action.payload.id;
            },
            addPopupTrailer:(state,action)=>{
                state.popupTrailer=action.payload
            }
        }
    }
)

export const {addnowPlaying, addTrailerVideo,addPopular,addTopRated,addUpcoming,addSearch,addSearchResults,toggleMoviePopup,addPopupTrailer}=movieSlice.actions
export default movieSlice.reducer