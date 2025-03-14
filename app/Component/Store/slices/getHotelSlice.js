import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { apilink } from "../../common";

export const getSingleHotel=createAsyncThunk("/hotel",async({HotelCode,checkIn,checkOut,adults,children,guestNationality="IN"})=>{
const res=await axios.post(`${apilink}/hotels/hotel_single`,({HotelCode,checkIn,checkOut,adults,children,guestNationality,}))

return res.data;
})


 

const hotelgetSLice = createSlice({
    name: "hotel",
    initialState: { info: [], isLoading: false, isError: false },
    extraReducers: (builder) => {
      builder.addCase(getSingleHotel.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getSingleHotel.fulfilled, (state, action) => {
        state.info = action.payload;
        state.isLoading = false;
      });
      builder.addCase(getSingleHotel.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    },
  });
  
  export default hotelgetSLice.reducer;
  