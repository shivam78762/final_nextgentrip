
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { apilink } from "../../common";

export const Advance_searchApi = createAsyncThunk(
  "/Advancesearch",
  async ({
    EndUserIp,
    AdultCount,
    ChildCount,
    InfantCount,
    TraceId,
    ResultIndex,
    Source,
    IsLCC,
    IsRefundable,
    AirlineRemark,
    TripIndicator,
    SegmentIndicator,
    AirlineCode,
    AirlineName,
    FlightNumber,
    FareClass,
    OperatingCarrier
  }) => {

  
    const data = await axios.post(`${apilink}/advance-search-flights`,{EndUserIp,AdultCount,ChildCount,InfantCount,TraceId,ResultIndex,Source,IsLCC,IsRefundable,AirlineRemark
        ,TripIndicator,SegmentIndicator,AirlineCode,AirlineName,FlightNumber,FareClass,OperatingCarrier
    });


    return data.data;

  }
);

const advance_search_slice = createSlice({
  name: "Advancesearch",
  initialState: { data: [], isLoading: false, isError: false },
  extraReducers: (builder) => {
    builder.addCase(Advance_searchApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(Advance_searchApi.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(Advance_searchApi.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default advance_search_slice.reducer;
