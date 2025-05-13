// Store/slices/cabSearchSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apilink } from "../../common";
export const getCabCityApi = createAsyncThunk("cabSearch/getCabCityApi", async () => {
  const response = await axios.get(`${apilink}/transfer-search`); // Replace with your API endpoint
  return response.data;
});

const cabSearchSlice = createSlice({
  name: "cabSearch",
  initialState: {
    info: {
      CabCities: [],
    },
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCabCityApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCabCityApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.info.CabCities = action.payload;
      })
      .addCase(getCabCityApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default cabSearchSlice.reducer;