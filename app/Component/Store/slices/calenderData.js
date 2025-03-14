import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { apilink } from "../../common";

export const getCalendarFare = createAsyncThunk(
    'calendarFare/fetchCalendarFare',
    async (payload, { rejectWithValue }) => {
      try {
        const response = await axios.post(
          `${apilink}/get-calendar-fare`, 
          payload
        );
        console.log('response',response)
        return response.data; 
      } catch (error) {
        if (error.response) {
          return rejectWithValue(error.response.data); 
        }
        return rejectWithValue({ error: 'Network error' }); // Handle network error
      }
    }
  );
  
  // Calendar Slice
  const calendarSlice = createSlice({
    name: "calendar",
    initialState: {
      fares: [], 
      isLoading: false,
      isError: false, 
    },
    extraReducers: (builder) => {
      builder.addCase(getCalendarFare.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getCalendarFare.fulfilled, (state, action) => {
        state.fares = action.payload;  
        state.isLoading = false;
      });
      builder.addCase(getCalendarFare.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    },
  });
  
  // Exporting the reducer to use in the store
  export default calendarSlice.reducer;
  