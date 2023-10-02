import { configureStore } from "@reduxjs/toolkit";
import mealsAppFavoritesSlice from "./MealsApp/favorites";
import expenseTrackerManageExpenseSlice from "./ExpenseTracker/expenses";
import { expenseApiSlice } from "./ExpenseTracker/apiSlice";

export const store = configureStore({
    reducer: {
        mealsFavorites: mealsAppFavoritesSlice,
        expenses: expenseTrackerManageExpenseSlice,
        [expenseApiSlice.reducerPath]: expenseApiSlice.reducer,
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(expenseApiSlice.middleware)
});