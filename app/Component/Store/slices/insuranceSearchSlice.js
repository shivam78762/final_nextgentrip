import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apilink } from "../../common";

export const getInsuranceSearch = createAsyncThunk(
  "/insurance",
  async ({ PlanCategory, PlanCoverage, PlanType, TravelStartDate, TravelEndDate }) => {
    try {
      // Fetch the user's IPv4 address
      const ipRes = await axios.get("https://api.ipify.org?format=json");
      const EndUserIp = ipRes.data.ip;

      console.log(PlanCategory, PlanCoverage, PlanType, TravelStartDate, TravelEndDate, EndUserIp, "Request Data");

      // Send the insurance search request
      const res = await axios.post(`${apilink}/insurance/search`, {
        EndUserIp,
        PlanCategory,
        PlanCoverage,
        PlanType,
        TravelStartDate,
        TravelEndDate,
        NoOfPax: 1,
        PaxAge: [37],
      });

      return res.data;
    } catch (error) {
      console.error("Error fetching user IP or insurance data:", error);
      throw error;
    }
  }
);

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
