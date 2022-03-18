import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visibility: true,
};


/** NavbarSlice Object having one reducer, toggleVisible reverse changing boolean variable
 *  visibility for purposes of minimizing, normal sizing left menu.
 */
export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        /** It reverse Boolean value for state property visibility/minimized for left menu button
         * @param {*} state 
         */
        toggleVisible: (state) => {
            state.visibility = !(state.visibility)
        }
    }
});

export const { toggleVisible } = navbarSlice.actions;

/** select visibility state for the purpose of displaying left menu state
 * @param {*} state 
 * @returns navbar visibility boolean value
 */
export const selectVisibility = state => state.navbar.visibility;

export default navbarSlice.reducer;