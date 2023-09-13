import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favIds: [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state, action) {
            state.favIds.push(action.payload.id);
        },
        removeFavorite(state, action) {
            state.favIds.splice(
                state.favIds.findIndex((id) => action.payload.id === id),
                1
            );
        }
    }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;