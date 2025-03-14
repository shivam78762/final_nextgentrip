import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apilink } from "../../common";

export const getTopAirPorts=createAsyncThunk("/airports",async()=>{
const res=await axios.get(`${apilink}/airports`)

return res.data;
})




const TopAirportSlice = createSlice({
    name: "airports",
    initialState: { info: [], isLoading: false, isError: false },
    extraReducers: (builder) => {
      builder.addCase(getTopAirPorts.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getTopAirPorts.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      });
      builder.addCase(getTopAirPorts.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    },
  });
  
  export default TopAirportSlice.reducer;
  