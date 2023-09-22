import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favIds: [],
};

const mealsAppFavoritesSlice = createSlice({
    name: 'mealsAppFavoritesSlice',
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
        },
    },
});

export const { addFavorite, removeFavorite } = mealsAppFavoritesSlice.actions;

export default mealsAppFavoritesSlice.reducer;