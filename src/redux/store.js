import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './auth/userSlise';
import housesReduser from './houses/houseSlice'

const rootReducer = combineReducers({
    user: userReducer,
    houses: housesReduser
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})