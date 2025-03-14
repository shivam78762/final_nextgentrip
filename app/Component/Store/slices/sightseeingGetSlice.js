import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { apilink } from "../../common";

export const getseeingApi=createAsyncThunk("/getseeing",async({EndUserIp,ResultIndex,TraceId
})=>{

const res=await axios.post(`${apilink}/sightseeing/get`,{EndUserIp,ResultIndex,TraceId})

return res.data;
})


 

const sightseeingGetslice = createSlice({
    name: "getseeing",
    initialState: { info: [], isLoading: false, isError: false },
    extraReducers: (builder) => {
      builder.addCase(getseeingApi.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getseeingApi.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      });
      builder.addCase(getseeingApi.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    },
  });

  
  
  export default sightseeingGetslice.reducer;
  