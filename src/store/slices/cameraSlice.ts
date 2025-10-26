import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Camera {
  id: string
  name: string
  description: string
  stream_url: string
  location: {
    type: 'Point'
    coordinates: [number, number]
  }
  status: 'online' | 'offline' | 'processing'
  last_activity: string
}

interface CameraState {
  cameras: Camera[]
  selectedCamera: Camera | null
  isLoading: boolean
  error: string | null
}

const initialState: CameraState = {
  cameras: [],
  selectedCamera: null,
  isLoading: false,
  error: null
}

const cameraSlice = createSlice({
  name: 'cameras',
  initialState,
  reducers: {
    setCameras: (state, action: PayloadAction<Camera[]>) => {
      state.cameras = action.payload
    },
    setSelectedCamera: (state, action: PayloadAction<Camera | null>) => {
      state.selectedCamera = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    updateCameraStatus: (state, action: PayloadAction<{ id: string; status: Camera['status'] }>) => {
      const camera = state.cameras.find(cam => cam.id === action.payload.id)
      if (camera) {
        camera.status = action.payload.status
      }
    }
  }
})

export const { 
  setCameras, 
  setSelectedCamera, 
  setLoading, 
  setError, 
  updateCameraStatus 
} = cameraSlice.actions

export default cameraSlice.reducer