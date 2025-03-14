import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { apilink } from "../../common";

export const searchreturnflightapi = createAsyncThunk(
  "/searchretunFlight",
  async ({
    EndUserIp,
    AdultCount,
    ChildCount,
    InfantCount,
    DirectFlight,
    OneStopFlight,
    JourneyType,
    PreferredAirlines,
    Origin,
    Destination,
    FlightCabinClass,
    PreferredDepartureTime,
    PreferredArrivalTime,
    PreferredDepartureTime2,

  }) => {


    








  
    const data = await axios.post(`${apilink}/search-return-flights`,{EndUserIp,AdultCount,ChildCount,InfantCount,DirectFlight,OneStopFlight
     ,JourneyType ,PreferredAirlines,Origin,Destination,FlightCabinClass,PreferredDepartureTime,PreferredArrivalTime,PreferredDepartureTime2});


    return data.data;

  }
);

const searchreturnslice = createSlice({
  name: "searchreturnFlight",
  initialState: { data: [], isLoading: false, isError: false },
  extraReducers: (builder) => {
    builder.addCase(searchreturnflightapi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchreturnflightapi.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(searchreturnflightapi.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default searchreturnslice.reducer;
