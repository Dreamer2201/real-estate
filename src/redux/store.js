import { configureStore } from "@reduxjs/toolkit";
import userReducer from './auth/userSlise';
import housesReduser from './houses/houseSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        houses: housesReduser
    }
})