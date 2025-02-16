// Import required dependencies from Redux Toolkit and Axios
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create async thunk for getting all orders
export const getorder = createAsyncThunk("order/get", async () => {
 try {
   // Make GET request to fetch all orders
   let result = await axios.get("http://localhost:5000/order/");
   return result;
 } catch (error) {
   console.log(error); // Should use proper error handling
 }
});

// Create async thunk for adding a new order
export const addorder = createAsyncThunk("order/add", async (neworder) => {
 try {
   // Make POST request to add new order
   let result = await axios.post("http://localhost:5000/order/add", neworder);
   return result;
 } catch (error) {
   console.log(error);
 }
});

// Create async thunk for deleting a order
export const deleteorder = createAsyncThunk("order/delete", async (id) => {
 try {
   // Make DELETE request with order ID
   let result = await axios.delete(`http://localhost:5000/order/${id}`);
   return result;
 } catch (error) {
   console.log(error);
 }
});

// Create async thunk for editing a order
export const editorder = createAsyncThunk(
 "order/edit",
 async ({ id, edited }) => {
   try {
     // Make PUT request with ID and updated data
     let result = await axios.put(`http://localhost:5000/order/${id}`, edited);
     return result;
   } catch (error) {
     console.log(error);
   }
 }
);

// Define initial state for the slice
const initialState = {
 orderlist: null, // List of orders
 status: null, // Status of API requests
};

// Create the order slice
export const orderSlice = createSlice({
 name: "order",
 initialState,
 reducers: {}, // No synchronous reducers needed
 
 // Handle async action states
 extraReducers: (builder) => {
   builder
     // Handle GET orders states
     .addCase(getorder.pending, (state) => {
       state.status = "pending";
     })
     .addCase(getorder.fulfilled, (state, action) => {
       state.status = "success";
       state.orderlist = action.payload.data.orders;
     })
     .addCase(getorder.rejected, (state) => {
       state.status = "fail";
     })

     // Handle ADD order states
     .addCase(addorder.pending, (state) => {
       state.status = "pending";
     })
     .addCase(addorder.fulfilled, (state, action) => {
       state.status = "success";
     })
     .addCase(addorder.rejected, (state) => {
       state.status = "fail";
     })

     // Handle DELETE order states
     .addCase(deleteorder.pending, (state) => {
       state.status = "pending";
     })
     .addCase(deleteorder.fulfilled, (state, action) => {
       state.status = "success";
     })
     .addCase(deleteorder.rejected, (state) => {
       state.status = "fail";
     })

     // Handle EDIT order states
     .addCase(editorder.pending, (state) => {
       state.status = "pending";
     })
     .addCase(editorder.fulfilled, (state, action) => {
       state.status = "success";
     })
     .addCase(editorder.rejected, (state) => {
       state.status = "fail";
     });
 },
});

// Export the reducer
export default orderSlice.reducer;