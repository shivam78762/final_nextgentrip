import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apilink = 'https://port-api.com/airport/search';

// Async thunk for fetching airport data
export const getAllAirports = createAsyncThunk(
  'airports/fetchAirports',
  async (info, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${apilink}/${info}`);
     
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice to handle the airport state
const Allairportslice = createSlice({
  name: 'airports',
  initialState: {
    info: [], 
    isLoading: false, 
    isError: false,
    errorMessage: ''
  },
  reducers: {
    clearAirports: (state) => {
      state.info = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAirports.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getAllAirports.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllAirports.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.errorMessage = action.payload || 'Error fetching airports';
      });
  }
});

export const { clearAirports } = Allairportslice.actions;
export default Allairportslice.reducer;
