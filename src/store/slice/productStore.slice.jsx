import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading';

export const productStoreSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setNewProduct: (state, action) => {
            return action.payload
        }
    }
})

export const getNewProductThunk = () => dispatch => {
    dispatch(setIsLoading(true)) /* abro el loading previo a la carga de los productos */
    axios
        .get(`https://e-commerce-api.academlo.tech/api/v1/products`)
        .then (res => dispatch(setNewProduct(res.data.data.products)))
        .finally (()=> dispatch(setIsLoading(false))) /* lo utilizo para cerrar el loading una vez q carga tooooodooooo */
}


export const { setNewProduct } = productStoreSlice.actions;

export default productStoreSlice.reducer;
