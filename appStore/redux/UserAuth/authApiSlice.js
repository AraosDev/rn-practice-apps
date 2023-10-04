import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseUrl = 'https://identitytoolkit.googleapis.com/v1';

export const authApiSlice = createApi({
    reducerPath: 'authApiSlice',
    baseQuery: (args, api, options) => {
        const rawBaseUrl = fetchBaseQuery({ baseUrl });

        const key = 'AIzaSyArcutAky7vc1p9k4c2ShMz1HCIKkgRmZ4';
        const adjustedArgs = typeof args === 'string' ? args : { ...args, url: `${args.url}?key=${key}` }
        return rawBaseUrl(adjustedArgs, api, options);
    },
    endpoints: (builder) => ({
        createAccount: builder.mutation({
            query: (body) => ({
                method: 'POST',
                url: '/accounts:signUp',
                body: { ...body, returnSecureToken: true }
            }),
        }),
        login: builder.mutation({
            query: (body) => ({
                method: 'POST',
                url: '/accounts:signInWithPassword',
                body: { ...body, returnSecureToken: true }
            }),
        })
    }),
});

export const { useCreateAccountMutation, useLoginMutation } = authApiSlice;