import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { apilink } from "../../common";

export const getfarequote=createAsyncThunk("/farequote",async({TraceId,ResultIndex,EndUserIp="148.135.137.54"})=>{
const res=await axios.post(`${apilink}/farequate`,{EndUserIp,TraceId,ResultIndex})

return res.data;
})


 

const farequoteSlice = createSlice({
    name: "farequote",
    initialState: { info: [], isLoading: false, isError: false },
    extraReducers: (builder) => {
      builder.addCase(getfarequote.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getfarequote.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      });
      builder.addCase(getfarequote.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    },
  });
  
  export default farequoteSlice.reducer;
  