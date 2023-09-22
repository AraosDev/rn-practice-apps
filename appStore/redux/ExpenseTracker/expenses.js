import { createSlice } from "@reduxjs/toolkit";
import { dummyExpenses } from "../../context/ExpenseTracker/expenses";

const initialState = {
    expenses: dummyExpenses,
};

export const expenseTrackerManageExpenseSlice = createSlice({
    name: 'expenseTrackerManageExpenseSlice',
    initialState,
    reducers: {
        addExpense(state, action) {
            const newExpense = {
                id: `e${state.expenses.length + 1}`,
                ...action.payload.data
            };

            return {
                ...state,
                expenses: [
                    newExpense,
                    ...state.expenses,
                ],
            };
        },
        updateExpense(state, action) {
            const { id: updatableId, data } = action.payload;
            const newExpenses = [...state.expenses];
            const updatableIndex = newExpenses.findIndex(({ id }) => id === updatableId);

            newExpenses.splice(
                updatableIndex,
                1,
                { ...newExpenses[updatableIndex], ...data },
            );

            return {
                ...state,
                expenses: newExpenses,
            };
        },
        deleteExpense(state, action) {
            return {
                ...state,
                expenses: state.expenses.filter(({ id }) => id !== action.payload.id),
            };
        },
    },
});

export const { addExpense, updateExpense, deleteExpense } = expenseTrackerManageExpenseSlice.actions;

export default expenseTrackerManageExpenseSlice.reducer;