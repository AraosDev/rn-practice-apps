import { configureStore } from "@reduxjs/toolkit";
import mealsAppFavoritesSlice from "./MealsApp/favorites";
import expenseTrackerManageExpenseSlice from "./ExpenseTracker/expenses";

export const store = configureStore({
    reducer: {
        mealsFavorites: mealsAppFavoritesSlice,
        expenses: expenseTrackerManageExpenseSlice,
    },
});