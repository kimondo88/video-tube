import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visibility: true
};

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        //toggle visbility of left menu
        toggleVisible: (state) => {
            state.visibility = !(state.visibility)
        }
    }
});

export const { toggleVisible } = navbarSlice.actions;

//select visibility state for the purpose of displaying left menu state
export const selectVisibility = state => state.navbar.visibility;

export default navbarSlice.reducer;