import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { apilink } from "../../common";

export const getBusSeatLayout=createAsyncThunk("/busSeat",async({TraceId,ResultIndex,EndUserIp="192.168.5.37"})=>{
const res=await axios.post(`${apilink}/bus/seatlayout`,{TraceId,ResultIndex,EndUserIp})

return res.data;
})


 

const busSeatSlice = createSlice({
    name: "busSeat",
    initialState: { info: [], isLoading: false, isError: false },
    extraReducers: (builder) => {
      builder.addCase(getBusSeatLayout.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getBusSeatLayout.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      });
      builder.addCase(getBusSeatLayout.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    },
  });
  
  export default busSeatSlice.reducer;
  