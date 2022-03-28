import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tag: 'all'
}

export const contentSlice= createSlice({
    name: 'content',
    initialState,
    reducers: {
        sortByGames: (state) => {
            state.tag = 'games'
        },
        sortBySport: (state) => {
            state.tag = 'sport'
        },
        sortByAll: (state) => {
            state.tag = 'all'
        }
    }
})

export const { sortByGames, sortBySport, sortByAll} = contentSlice.actions;

export const selectTag = state => state.content.tag;

export default contentSlice.reducer;