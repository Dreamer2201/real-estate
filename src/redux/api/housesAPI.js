import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'http://localhost:4000'

export const getAllHouses = createAsyncThunk(
    'houses/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const {data} = await axios.get(`${baseURL}/api/houses`);       
            return data;
        } catch(error) {
            return rejectWithValue(error);
        }
    }
);

export const getHouseById = createAsyncThunk(
    'houses/details',
    async (id, { rejectWithValue }) => {
        try {
            const {data} = await axios.get(`${baseURL}/api/houses/${id}`);    
            console.log(data)   
            return data;
        } catch(error) {
            return rejectWithValue(error);
        }
    }
);

export const addNewHouse = createAsyncThunk(
    'houses/add',
    async (newHouse, { rejectWithValue }) => {
        try {
            const {data} = await axios.post(`${baseURL}/api/houses`, newHouse, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              });  
              console.log(data)        
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const deleteHouse = createAsyncThunk(
    'houses/delete',
    async ({id}, { rejectWithValue }) => {
        try {
            await axios.delete(`/houses/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        } 
    }
);
