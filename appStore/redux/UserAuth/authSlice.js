import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: { idToken: null, refreshToken: null }
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setToken(state, action) {
            return {
                ...state,
                token: { ...action.payload },
            };
        },
        logout(state) {
            return {
                ...state,
                token: { idToken: null, refreshToken: null }
            };
        },
    },
});

export const { setToken, logout } = authSlice.actions;

export default authSlice.reducer;