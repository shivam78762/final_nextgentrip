import { configureStore } from "@reduxjs/toolkit";

import searchFlightslice from "./slices/SearchFlight";
import Allairport from "./slices/Allairportslice";
import topPortsSlice from "./slices/topPortsSlice";
import blogslice from "./slices/blogslice";
import ipslice from "./slices/ipslice";
import searchreturn from "./slices/searchreturnFlight"
import advanceSearchFlight from "./slices/advance_search_slice"
import citysearch from "./slices/citysearchSlice"
import hotelsSlice from "./slices/hotelsSlices"
import sightseeingslice from "./slices/sightseeingSlice"
import sightseeingGetslice from "./slices/sightseeingGetSlice"
import busCityslice from "./slices/busSearchSlice"
import gethotelslice from './slices/getHotelSlice';
import preBookSlice from "./slices/hotelpreBookslice";
import busslice from "./slices/busslices"
import busSeatSlice from "./slices/busSeatlayout"
import fareRuleSlice from "./slices/fairRuleflight"
import farequoteSlice from "./slices/farequateflight";
import ssrFlightSlice from "./slices/ssrRuleFlight"
import getRegHotelsSlice from "./slices/getReqHotels"
import insuranceSlice from "./slices/insuranceSearchSlice"
import calendarSlice from './slices/calenderData'
import currencySlice from "./slices/currencySlice"
import cabSearchReducer from "./slices/cabSearchSlice";

import destinationSearchReducer from './slices/destinationSearchSlice';

import  SliderSlice  from "./slices/SliderSlice";
export const store = configureStore({
  reducer: { searchFlightslice, Allairport, topPortsSlice, blogslice, ipslice, searchreturn,advanceSearchFlight,
    farequoteSlice,ssrFlightSlice,
    getRegHotelsSlice,
    citysearch,hotelsSlice,preBookSlice,
    sightseeingslice,sightseeingGetslice,busCityslice,gethotelslice,busslice,busSeatSlice,fareRuleSlice,
    insurance:insuranceSlice,
    currencySlice,
    calendar:calendarSlice,
    sliderData:SliderSlice,
    cabSearchSlice: cabSearchReducer,
    destinationSearch: destinationSearchReducer,

  },
});
