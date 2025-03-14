import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { apilink } from "../../common";

export const getfareRule=createAsyncThunk("/fareRule",async({TraceId,ResultIndex,EndUserIp="0.0.0.0"})=>{
const res=await axios.post(`${apilink}/farerule`,{EndUserIp,TraceId,ResultIndex})

return res.data;
})


 

const fareRuleSlice = createSlice({
    name: "fareRule",
    initialState: { info: [], isLoading: false, isError: false },
    extraReducers: (builder) => {
      builder.addCase(getfareRule.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getfareRule.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      });
      builder.addCase(getfareRule.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    },
  });
  
  export default fareRuleSlice.reducer;
  