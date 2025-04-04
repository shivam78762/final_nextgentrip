import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { localurl } from "../flightUrls";
import { apilink } from "../../common";

export const searchFlightApi = createAsyncThunk(
  "/searchFlight",
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
  }, { rejectWithValue }) => { 

    try {
    

      const data = await axios.post(`${apilink}/search-flights`, {
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
      });


      return data.data;
    } catch (error) {
      // Handle the error and return it with rejectWithValue
      console.error('Error in searchFlightApi:', error);
      return rejectWithValue(error.response ? error.response.data : 'An error occurred');
    }
  }
);

const searchSlice = createSlice({
  name: "searchFlight",
  initialState: { data: [], isLoading: false, isError: false, errorMessage: '' },
  extraReducers: (builder) => {
    builder.addCase(searchFlightApi.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
    });
    builder.addCase(searchFlightApi.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = '';
    });
    builder.addCase(searchFlightApi.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = action.payload || 'An error occurred';
    });
  },
});

export default searchSlice.reducer;