import { configureStore } from '@reduxjs/toolkit'
import  isLoadingSlice  from './slice/isLoading.slice'
import productStoreSlice from './slice/productStore.slice'
import purchasesSlice  from './slice/purchases.slice'

export default configureStore({
  reducer: {
    product: productStoreSlice,
    isLoading: isLoadingSlice,
    purchases: purchasesSlice
  }
})


//en el INDEX cuidado con las llaves en la importaciones de los SLICESSS