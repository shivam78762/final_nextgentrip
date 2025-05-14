import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { apilink } from "../../common";

export const getssrFlight=createAsyncThunk("/ssrFlight",async({TraceId,ResultIndex,EndUserIp="148.135.137.54"})=>{
const res=await axios.post(`${apilink}/advance-ssr`,{EndUserIp,TraceId,ResultIndex})

return res.data;
})


 

const ssrFlightSlice = createSlice({
    name: "ssrFlight",
    initialState: { info: [], isLoading: false, isError: false },
    extraReducers: (builder) => {
      builder.addCase(getssrFlight.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getssrFlight.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      });
      builder.addCase(getssrFlight.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    },
  });
  
  export default ssrFlightSlice.reducer;
  