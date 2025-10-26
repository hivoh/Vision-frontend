import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import cameraReducer from './slices/cameraSlice'
import alertReducer from './slices/alertSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cameras: cameraReducer,
    alerts: alertReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch