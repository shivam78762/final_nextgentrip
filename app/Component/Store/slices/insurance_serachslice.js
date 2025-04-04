import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { apilink } from "../../common";

export const getInsuranceSearch=createAsyncThunk("/insurance",async({PlanCategory,PlanCoverage,PlanType,TravelStartDate,TravelEndDate})=>{
  


const res=await axios.post(`${apilink}/insurance`,({EndUserIp:"0.0.0.0",PlanCategory,PlanCoverage,PlanType,TravelStartDate,TravelEndDate,NoOfPax:1,PaxAge:[37]}))

return res.data;
})


 

const insuranceSlice = createSlice({
    name: "insurance",
    initialState: { info: [], isLoading: false, isError: false },
    extraReducers: (builder) => {
      builder.addCase(getInsuranceSearch.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getInsuranceSearch.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      });
      builder.addCase(getInsuranceSearch.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    },
  });
  
  export default insuranceSlice.reducer;
  