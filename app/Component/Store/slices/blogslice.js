import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { apilink } from "../../common";

export const getBlogs=createAsyncThunk("/blogs",async()=>{
const res=await axios.get(`${apilink}/blog`)

return res.data;
})


 

const blogslice = createSlice({
    name: "blogs",
    initialState: { info: [], isLoading: false, isError: false },
    extraReducers: (builder) => {
      builder.addCase(getBlogs.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getBlogs.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      });
      builder.addCase(getBlogs.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    },
  });
  
  export default blogslice.reducer;
  