import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseUrl = 'https://react-native-practise-52af7-default-rtdb.firebaseio.com/';

export const expenseApiSlice = createApi({
    reducerPath: 'expenseApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['UPDATE_EXPENSE'],
    endpoints: (builder) => ({
        getExpenses: builder.query({
            query: () => ({ url: 'expenses.json' }),
            providesTags: ['UPDATE_EXPENSE'],
            transformResponse: (response) => {
                const transformedRes = !!response && !Array.isArray(response) ? Object.entries(response).map(([key, value]) => ({
                    ...value,
                    id: key
                })) : response;
                return transformedRes;
            }
        }),
        addExpenses: builder.mutation({
            query: (body) => ({
                url: 'expenses.json',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['UPDATE_EXPENSE'],
        }),
        updateExpense: builder.mutation({
            query: ({ id, data }) => {
                return {
                    url: `expenses/${id}.json`,
                    method: 'PATCH',
                    body: data,
                }
            },
            invalidatesTags: ['UPDATE_EXPENSE'],
        }),
        deleteExpense: builder.mutation({
            query: (id) => ({
                url: `expenses/${id}.json`,
                method: 'DELETE',
            }),
            invalidatesTags: ['UPDATE_EXPENSE'],
        }),
    }),
});

export const {
    useGetExpensesQuery,
    useAddExpensesMutation,
    useUpdateExpenseMutation,
    useDeleteExpenseMutation,
} = expenseApiSlice;