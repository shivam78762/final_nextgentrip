import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getip=createAsyncThunk("/ip",async()=>{
const res=await axios.get(`https://api.ipify.org/?format=json`)
const ipadd=await res.data.ip
const alipdata= await axios.get(`http://ip-api.com/json/${ipadd}`)



return alipdata.data;
})


 

const ipslice = createSlice({
    name: "ip",
    initialState: { info: [], isLoading: false, isError: false },
    extraReducers: (builder) => {
      builder.addCase(getip.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getip.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      });
      builder.addCase(getip.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    },
  });
  
  export default ipslice.reducer;
  