// Import required dependencies from Redux Toolkit and Axios
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create async thunk for getting all reservations
export const getreservation = createAsyncThunk("reservation/get", async () => {
 try {
   // Make GET request to fetch all reservations
   let result = await axios.get("http://localhost:5000/reservation/");
   return result;
 } catch (error) {
   console.log(error); // Should use proper error handling
 }
});

// Create async thunk for adding a new reservation
export const addreservation = createAsyncThunk("reservation/add", async (newreservation) => {
 try {
   // Make POST request to add new reservation
   let result = await axios.post("http://localhost:5000/reservation/add", newreservation);
   return result;
 } catch (error) {
   console.log(error);
 }
});

// Create async thunk for deleting a reservation
export const deletereservation = createAsyncThunk("reservation/delete", async (id) => {
 try {
   // Make DELETE request with reservation ID
   let result = await axios.delete(`http://localhost:5000/reservation/${id}`);
   return result;
 } catch (error) {
   console.log(error);
 }
});

// Create async thunk for editing a reservation
export const editreservation = createAsyncThunk(
 "reservation/edit",
 async ({ id, edited }) => {
   try {
     // Make PUT request with ID and updated data
     let result = await axios.put(`http://localhost:5000/reservation/${id}`, edited);
     return result;
   } catch (error) {
     console.log(error);
   }
 }
);

// Define initial state for the slice
const initialState = {
 reservationlist: null, // List of reservations
 status: null, // Status of API requests
};

// Create the reservation slice
export const reservationSlice = createSlice({
 name: "reservation",
 initialState,
 reducers: {}, // No synchronous reducers needed
 
 // Handle async action states
 extraReducers: (builder) => {
   builder
     // Handle GET reservations states
     .addCase(getreservation.pending, (state) => {
       state.status = "pending";
     })
     .addCase(getreservation.fulfilled, (state, action) => {
       state.status = "success";
       state.reservationlist = action.payload.data.reservations;
     })
     .addCase(getreservation.rejected, (state) => {
       state.status = "fail";
     })

     // Handle ADD reservation states
     .addCase(addreservation.pending, (state) => {
       state.status = "pending";
     })
     .addCase(addreservation.fulfilled, (state, action) => {
       state.status = "success";
     })
     .addCase(addreservation.rejected, (state) => {
       state.status = "fail";
     })

     // Handle DELETE reservation states
     .addCase(deletereservation.pending, (state) => {
       state.status = "pending";
     })
     .addCase(deletereservation.fulfilled, (state, action) => {
       state.status = "success";
     })
     .addCase(deletereservation.rejected, (state) => {
       state.status = "fail";
     })

     // Handle EDIT reservation states
     .addCase(editreservation.pending, (state) => {
       state.status = "pending";
     })
     .addCase(editreservation.fulfilled, (state, action) => {
       state.status = "success";
     })
     .addCase(editreservation.rejected, (state) => {
       state.status = "fail";
     });
 },
});

// Export the reducer
export default reservationSlice.reducer;