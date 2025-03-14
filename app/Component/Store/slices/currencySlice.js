import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getCurrencyDef= createAsyncThunk("/currency",async()=>{
    const info =  await axios.get(`https://api.exchangerate-api.com/v4/latest/INR`)
    return info.data
})


const currencySlice=createSlice({
    name:"currencys",
    initialState:{info:[],isLoading:false,isError:false},
    extraReducers:(builder)=>{
        builder.addCase(getCurrencyDef.pending,(state)=>{
            state.isLoading=true;
        });
        builder.addCase(getCurrencyDef.fulfilled,(state,action)=>{
state.info=action.payload;
state.isLoading=false;
        })

builder.addCase(getCurrencyDef.rejected,(state)=>{
    state.isError=true;
    state.isLoading=false;
})
    }
})
export default currencySlice.reducer;
