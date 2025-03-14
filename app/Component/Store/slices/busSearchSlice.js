import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { apilink } from "../../common";

export const getBuscityapi=createAsyncThunk("/buscity",async(city)=>{
const res=await axios.get(`${apilink}/bus/cities?city_name=${city}`)

return res.data;
})


 

const buscityslice = createSlice({
    name: "buscity",
    initialState: { info: [], isLoading: false, isError: false },
    extraReducers: (builder) => {
      builder.addCase(getBuscityapi.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getBuscityapi.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      });
      builder.addCase(getBuscityapi.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    },
  });
  
  export default buscityslice.reducer;
  