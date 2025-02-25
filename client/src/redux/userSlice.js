// Import necessary dependencies from Redux Toolkit and Axios
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create async thunk for user registration
export const userRegister = createAsyncThunk("/register", async (user) => {
 try {
   // Make POST request to register user
   let response = await axios.post("http://localhost:5000/user/register", user);
   return response;
 } catch (error) {
   console.log(error); // Should implement proper error handling
 }
});

// Create async thunk for user login
export const userlogin = createAsyncThunk("/login", async (user) => { // Typo in "login"
 try {
   // Make POST request to login user
   let response = await axios.post("http://localhost:5000/user/login", user);
   return await response; // Unnecessary await
 } catch (error) {
   console.log(error);
 }
});

// Create async thunk for getting current user
export const userCurrent = createAsyncThunk("user/current", async () => {
 try {
   // Make GET request with auth token in headers
   let response = await axios.get("http://localhost:5000/user/current", {
     headers: {
       Authorization: localStorage.getItem("token"),
     },
   });
   return await response;
 } catch (error) {
   console.log(error);
 }
});

// Define initial state
const initialState = {
 user: null, // Current user data
 status: null, // API request status
};

// Create the user slice
export const userSlice = createSlice({
 name: "user",
 initialState,
 reducers: {
   // Synchronous logout action
   logout: (state, action) => {
     state.user = null;
     localStorage.removeItem("token"); //explain this ?!
   },
 },
 // Handle async action states
 extraReducers: {
   // Handle registration states
   [userRegister.pending]: (state) => {
     state.status = "pending";
   },
   [userRegister.fulfilled]: (state, action) => {
     state.status = "successsss"; // Typo in success
     state.user = action.payload.data.newUserToken;
     localStorage.setItem("token", action.payload.data.token);
   },
   [userRegister.rejected]: (state) => {
     state.status = "fail";
   },

   // Handle login states
   [userlogin.pending]: (state) => {
     state.status = "pending";
   },
   [userlogin.fulfilled]: (state, action) => {
     state.status = "successsss"; // Typo in success
     state.user = action.payload.data.user;
     localStorage.setItem("token", action.payload.data.token);
   },
   [userlogin.rejected]: (state) => {
     state.status = "fail";
   },

   // Handle current user states
   [userCurrent.pending]: (state) => {
     state.status = "pending";
   },
   [userCurrent.fulfilled]: (state, action) => {
     state.status = "successsss"; // Typo in success
     state.user = action.payload?.data.user;
   },
   [userCurrent.rejected]: (state) => {
     state.status = "fail";
   },
 },
});

// Export actions and reducer
export const { logout } = userSlice.actions;
export default userSlice.reducer;