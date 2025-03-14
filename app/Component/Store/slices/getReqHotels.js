import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { apilink } from "../../common";

export const getAllRegHotels=createAsyncThunk("/getRegHotels",async()=>{
const res=await axios.get(`${apilink}/hotel/all`)

return res.data;
})


 

const getRegHotelsSlice = createSlice({
    name: "getRegHotels",
    initialState: { info: [], isLoading: false, isError: false },
    extraReducers: (builder) => {
      builder.addCase(getAllRegHotels.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getAllRegHotels.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      });
      builder.addCase(getAllRegHotels.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    },
  });
  
  export default getRegHotelsSlice.reducer;
  