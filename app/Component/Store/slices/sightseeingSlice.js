import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { apilink } from "../../common";

export const getSightSeeingapi=createAsyncThunk("/sightseeing",async({CityId,CountryCode,TravelStartDate,FromDate,ToDate,AdultCount,ChildCount,ChildAge,
    PreferredLanguage,PreferredCurrency,IsBaseCurrencyRequired,EndUserIp,BookingMode
})=>{

const res=await axios.post(`${apilink}/sightseeing/search`,{CityId,CountryCode,TravelStartDate,FromDate,ToDate,AdultCount,ChildCount,ChildAge,
    PreferredLanguage,PreferredCurrency,IsBaseCurrencyRequired,EndUserIp,BookingMode
})

return res.data;
})


 

const sightseeingslice = createSlice({
    name: "sightseeing",
    initialState: { info: [], isLoading: false, isError: false },
    extraReducers: (builder) => {
      builder.addCase(getSightSeeingapi.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getSightSeeingapi.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      });
      builder.addCase(getSightSeeingapi.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    },
  });
  
  export default sightseeingslice.reducer;
  