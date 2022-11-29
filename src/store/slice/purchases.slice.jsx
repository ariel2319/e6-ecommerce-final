import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const purchasesSlice = createSlice({
    name: 'purchases ',
    initialState: [],
    reducers: {
      setPurchases : (state, action) => {
        return action.payload
      }

    }
})

export const getPurchasesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios 
        .get(`https://e-commerce-api.academlo.tech/api/v1/purchases`)
        .then(() => dispatch(setPurchases(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}


export const { setPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
