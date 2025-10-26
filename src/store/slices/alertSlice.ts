import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Alert {
  id: string
  camera_id: string
  type: 'human_detection' | 'geofence_breach' | 'system'
  severity: 'low' | 'medium' | 'high' | 'critical'
  message: string
  timestamp: string
  acknowledged: boolean
}

interface AlertState {
  alerts: Alert[]
  unreadCount: number
  isLoading: boolean
  error: string | null
}

const initialState: AlertState = {
  alerts: [],
  unreadCount: 0,
  isLoading: false,
  error: null
}

const alertSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    setAlerts: (state, action: PayloadAction<Alert[]>) => {
      state.alerts = action.payload
      state.unreadCount = action.payload.filter(alert => !alert.acknowledged).length
    },
    addAlert: (state, action: PayloadAction<Alert>) => {
      state.alerts.unshift(action.payload)
      state.unreadCount += 1
    },
    acknowledgeAlert: (state, action: PayloadAction<string>) => {
      const alert = state.alerts.find(a => a.id === action.payload)
      if (alert && !alert.acknowledged) {
        alert.acknowledged = true
        state.unreadCount -= 1
      }
    },
    acknowledgeAllAlerts: (state) => {
      state.alerts.forEach(alert => {
        alert.acknowledged = true
      })
      state.unreadCount = 0
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    }
  }
})

export const { 
  setAlerts, 
  addAlert, 
  acknowledgeAlert, 
  acknowledgeAllAlerts, 
  setLoading, 
  setError 
} = alertSlice.actions

export default alertSlice.reducer