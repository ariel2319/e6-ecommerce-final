import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';


export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setCarts: (state, action) => {
      return action.payload;
    }

  }
})


export const getCartThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/cart`, getConfig())
    .then((res) => dispatch(setCarts(res.data.data.cart.products)))
    .finally(() => dispatch(setIsLoading(false)));
}


export const createCartThunk = (product) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(`https://e-commerce-api.academlo.tech/api/v1/cart`,
      product,
      getConfig())
    .then((res) => dispatch(getCartThunk()))
    .catch((error) => console.log(error.response?.data))
    .finally(() => dispatch(setIsLoading(false)))
}

export const deleteCartThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .delete(`https://e-commerce-api.academlo.tech/api/v1/cart/${id}`)
    .then((res) => dispatch(getCartThunk()))
    .catch((error) => console.log(error.response?.data))
    .finally(() => dispatch(setIsLoading(false)));
}

export const checkOutCartThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(`https://e-commerce-api.academlo.tech/api/v1/purchases`,
      {},
      getConfig())
    .then((res) => dispatch(setCarts([])))
    .finally(() => dispatch(setIsLoading(false)));
}

export const { setCarts } = cartSlice.actions;

export default cartSlice.reducer;
