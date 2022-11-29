import { configureStore } from '@reduxjs/toolkit'
import  isLoadingSlice  from './slice/isLoading.slice'
import productStoreSlice from './slice/productStore.slice'

export default configureStore({
  reducer: {
    product: productStoreSlice,
    isLoading: isLoadingSlice
  }
})
