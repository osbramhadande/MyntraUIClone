import { createSlice } from '@reduxjs/toolkit'
import data from '../data/shirts'

export const productSlice = createSlice({
    name:'products',
    initialState: {
        value: [],
    },
    reducers:{
        fetchAllproducts: (state)=>{
            state.value = data;
        },
    }

})

export const { fetchAllproducts } = productSlice.actions;

export default productSlice.reducer;