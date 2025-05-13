import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apilink } from "../../common";
// Async thunk to fetch destination data




// Async thunk to fetch destination data
export const getDestinationSearchData = createAsyncThunk(
  'destinationSearch/getDestinationSearchData',
  async ({ searchType, countryCode }, { rejectWithValue }) => {
   try {
      const response = await fetch(`${apilink}/destination-search-static-data`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ SearchType: searchType, CountryCode: countryCode }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
   
      return data; // Return only the Destinations array
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const destinationSearchSlice = createSlice({
  name: 'destinationSearch',
  initialState: {
    destinations: [],
    loading: false,
    error: null,
    searchType: '1', // Default to City
    countryCode: 'IN', // Default to India
  },
  reducers: {
    setSearchParams: (state, action) => {
      state.searchType = action.payload.searchType;
      state.countryCode = action.payload.countryCode;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDestinationSearchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDestinationSearchData.fulfilled, (state, action) => {
        state.loading = false;
        state.destinations = action.payload; // Set to Destinations array
      })
      .addCase(getDestinationSearchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { setSearchParams } = destinationSearchSlice.actions;
export default destinationSearchSlice.reducer;
