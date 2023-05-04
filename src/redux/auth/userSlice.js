import { createSlice } from "@reduxjs/toolkit";
import { registerUser, fetchCurrentUser, fetchLogin, fetchLogout } from "../api/usersAPI";

const initialState = {
    name: '',
    email: null,
    token: null,
}

const userSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled,(state, action) => {
            const { name, email, token } = action.payload.user
            state.name = name
            state.email = email
            state.token = token;
            state.isLoggedIn = true;
        })
        .addCase(fetchCurrentUser.fulfilled, (state, action) => {
            console.log(action)
            const { name, email } = action.payload
            state.name = name
            state.email = email
            state.isLoggedIn = true;
        })
        .addCase(fetchCurrentUser.rejected, (state) => {
            state.isLoggedIn = false;
        })
        .addCase(fetchLogin.fulfilled, (state, action) => {
            const { name, email,token } = action.payload.user
            state.name = name
            state.email = email
            state.token = token;
            state.isLoggedIn = true;
        })
        .addCase(fetchLogout.fulfilled, (state, action) => {
            state.user.name = null;
            state.user.email = null;
            state.token = null; 
            state.isLoggedIn = false;
        })
    }
})

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;