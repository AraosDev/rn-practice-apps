import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseUrl = 'https://react-native-practise-52af7-default-rtdb.firebaseio.com/';

export const expenseApiSlice = createApi({
    reducerPath: 'expenseApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getExpenses: builder.query({
            query: () => ({ url: 'expenses.json' }),
        }),
    }),
});

export const { useGetExpensesQuery } = expenseApiSlice;