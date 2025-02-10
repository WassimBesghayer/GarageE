import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import reservationSlice from './reservationSlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    reservation:reservationSlice
  },
})