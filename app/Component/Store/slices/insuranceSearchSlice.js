import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apilink } from "../../common";

// Async Thunk to Fetch Insurance Data
export const getInsuranceSearch = createAsyncThunk(
  "/insurance",
  async (requestData) => {
    try {
      // Fetch User's IP Address
      const ipResponse = await axios.get("https://api.ipify.org?format=json");
      const userIp = ipResponse.data.ip;


      const updatedRequestData = {
        ...requestData,
        EndUserIp: userIp, 
      };



      const res = await axios.post(`${apilink}/insurance/search`, 
        {
          EndUserIp: userIp,
          PlanCategory: requestData.plancategory,
          PlanCoverage: requestData.plancoverage,
          PlanType: requestData.plantype,
          TravelStartDate: requestData.travelstartdate,
          TravelEndDate: requestData.travelenddate,
          NoOfPax: requestData.noOfPax || 1, 
          PaxAge: requestData.paxAge || [30], 
        }
      );

      return res.data;
    } catch (error) {
      console.error("Error fetching insurance data:", error);
      throw error;
    }
  }
);

// Redux Slice for Insurance
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
