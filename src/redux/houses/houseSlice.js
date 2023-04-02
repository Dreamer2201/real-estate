import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { getAllHouses, getHouseById, addNewHouse, deleteHouse } from "../api/housesAPI";

const initialState = {
    houses: [],
    houseDetails: {},
    loading: false,
    error: null,
}

const notifySucsess = (str) => toast.success(str, {
    autoClose: 1800,
    icon: "🚀"
  });
  
const housesSlice = createSlice({
    name: "houses",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getAllHouses.pending, (state) => {
            state.loading = true
            return state
        })
        .addCase(getAllHouses.fulfilled, (state, action) => {
            state.loading = false
            state.houses = [...action.payload]
            return state
        })
        .addCase(getAllHouses.rejected, (state, action) => {
            console.log(action.payload)
            state.loading = false
            state.error = action.payload
            return state
        })
        .addCase(getHouseById.pending, (state, action) => {
            state.loading = true
            return state
        })
        .addCase(getHouseById.fulfilled, (state, action) => {
            state.loading = false
            console.log(action.payload)
            state.houseDetails = {...action.payload}
            return state
        })
        .addCase(getHouseById.rejected, (state, action) => {
            state.loading = false
            console.log(action.payload)
            state.error = action.payload
            return state
        })
        .addCase(deleteHouse.pending, (state) => {
            state.loading = true
            return state
        })
        .addCase(deleteHouse.fulfilled, (state, action) => {
            state.loading = false
            const result = state.houses.filter(item => item.id !== action.payload)
            state.houses = [...result]
            notifySucsess('House is deleted.')
            return state
        })
        .addCase(deleteHouse.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            return state
        })
        .addCase(addNewHouse.pending, (state) => {
            state.loading = true
            return state
        })
        .addCase(addNewHouse.fulfilled, (state, action) => {
            state.loading = false
            console.log(action.payload)
            // state.houses.push(action.payload);
            notifySucsess('House add to houses list!')
            return state
        })
        .addCase(addNewHouse.rejected, (state, action) => {
            state.loading = false
            console.log(action.payload)
            state.error = action.payload
            return state
        })
    }
})

export default housesSlice.reducer