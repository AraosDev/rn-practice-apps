import { configureStore } from "@reduxjs/toolkit";
import mealsAppFavoritesSlice from "./MealsApp/favorites";

export const store = configureStore({
    reducer: {
        mealsAppFavoritesSlice,
    },
});