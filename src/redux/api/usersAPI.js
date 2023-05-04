import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'http://localhost:4000'

export const tokenHeader = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }
}

export const registerUser = createAsyncThunk(
    'auth/register',
    async (dataUser, thunkAPI) => {
        try {
            const { data } = await axios.post('/api/users/register', dataUser);
            // tokenHeader.set(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        console.log(state)
        const tokenCurrent  = state.user.token; 
        console.log(tokenCurrent)
        if(tokenCurrent === null) {
            return thunkAPI.rejectWithValue();
        }
        tokenHeader.set(tokenCurrent );
        try {
            const {data} = await axios.post('/api/users/current');
            return data;
        } catch(error) {

        }
        
    }
)

export const fetchLogin = createAsyncThunk(
    'auth/login',
    async (dataUser, thunkAPI) => {
        console.log(dataUser)
        try {
            const { data } = await axios.post('/api/users/login', dataUser);
            tokenHeader.set(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const fetchLogout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('api/users/logout');
            tokenHeader.unset();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)