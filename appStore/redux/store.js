import { configureStore } from "@reduxjs/toolkit";
import mealsAppFavoritesSlice from "./MealsApp/favorites";
import expenseTrackerManageExpenseSlice from "./ExpenseTracker/expenses";
import userAuthSlice from './UserAuth/authSlice';
import favoritePlaces from './FavoritePlaces/favoritePlaces';
import { expenseApiSlice } from "./ExpenseTracker/apiSlice";
import { authApiSlice } from "./UserAuth/authApiSlice";

export const store = configureStore({
    reducer: {
        mealsFavorites: mealsAppFavoritesSlice,
        expenses: expenseTrackerManageExpenseSlice,
        userAuth: userAuthSlice,
        favoritePlaces,
        [expenseApiSlice.reducerPath]: expenseApiSlice.reducer,
        [authApiSlice.reducerPath]: authApiSlice.reducer
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(expenseApiSlice.middleware, authApiSlice.middleware)
});