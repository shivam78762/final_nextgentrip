import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { apilink } from "../../common";

export const getbuses=createAsyncThunk("/bus",async({DateOfJourney,OriginId,DestinationId,PreferredCurrency="INR",EndUserIp="223.178.208.151"})=>{
const res=await axios.post(`${apilink}/bus/search`,{DateOfJourney,OriginId,DestinationId,PreferredCurrency,EndUserIp})

return res.data;
})


 

const busslice = createSlice({
    name: "bus",
    initialState: { info: [], isLoading: false, isError: false },
    extraReducers: (builder) => {
      builder.addCase(getbuses.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getbuses.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      });
      builder.addCase(getbuses.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    },
  });
  
  export default busslice.reducer;
  