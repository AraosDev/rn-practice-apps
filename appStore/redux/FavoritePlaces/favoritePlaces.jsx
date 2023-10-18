import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: '',
    imageUrl: null,
    latitude: null,
    longitude: null,
    address: null,
    addedPlaces: [],
};

const favoritePlaces = createSlice({
    initialState,
    name: 'favoritePlaces',
    reducers: {
        setPlaceProps(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
        addPlace(state, action) {
            return {
                ...state,
                addedPlaces: [
                    ...state.addedPlaces,
                    action.payload,
                ]
            }
        },
        setAddPlaces(state, action) {
            return {
                ...state,
                addedPlaces: action.payload
            }
        }
    },
});

export const { setPlaceProps, addPlace, setAddPlaces } = favoritePlaces.actions;

export default favoritePlaces.reducer;