import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { apilink } from "../../common";

export const gethotelPreBookingApi=createAsyncThunk("/hotelprebook",async({BookingCode})=>{
const res=await axios.post(`${apilink}/hotels/prebooking`,({BookingCode}))

return res.data;
})


 

const preBookSlice = createSlice({
    name: "hotelprebook",
    initialState: { info: [], isLoading: false, isError: false },
    extraReducers: (builder) => {
      builder.addCase(gethotelPreBookingApi.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(gethotelPreBookingApi.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      });
      builder.addCase(gethotelPreBookingApi.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    },
  });
  
  export default preBookSlice.reducer;
  