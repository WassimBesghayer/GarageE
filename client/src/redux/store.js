import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import reservationSlice from './reservationSlice'
import orderSlice from './orderSlice'
import articleSlice from './articleSlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    reservation:reservationSlice,
    order:orderSlice,
    article:articleSlice
  },
})