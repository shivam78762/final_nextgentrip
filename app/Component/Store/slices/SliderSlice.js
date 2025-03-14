import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { apilink } from "../../common";


export const getSliderData= createAsyncThunk("/slider",async()=>{
    const info =  await axios.get(`${apilink}/sliders`)
    return info.data
})


const SliderSlice=createSlice({
    name:"slider",
    initialState:{info:[],isLoading:false,isError:false},
    extraReducers:(builder)=>{
        builder.addCase(getSliderData.pending,(state)=>{
            state.isLoading=true;
        });
        builder.addCase(getSliderData.fulfilled,(state,action)=>{
state.info=action.payload;
state.isLoading=false;
        })

builder.addCase(getSliderData.rejected,(state)=>{
    state.isError=true;
    state.isLoading=false;
})
    }
})
export default SliderSlice.reducer;
