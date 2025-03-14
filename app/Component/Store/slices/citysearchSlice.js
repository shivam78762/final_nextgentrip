import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apilink } from "../../common";

export const getAllcityes=createAsyncThunk("/getcity",async(city)=>{
const res=await axios.get(`${apilink}/cities?CountryCode=IN&search=${city}`)

return res.data;
})





const citysearchSlice = createSlice({
    name: "getcity",
    initialState: { info: [], isLoading: false, isError: false },
    extraReducers: (builder) => {
      builder.addCase(getAllcityes.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getAllcityes.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      });
      builder.addCase(getAllcityes.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    },
  });
  
  export default citysearchSlice.reducer;
  