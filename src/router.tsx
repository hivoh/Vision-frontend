import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import ErrorPage from './pages/ErrorPage'
import { Overview } from './pages/dashboard/Overview'
import { Cameras } from './pages/dashboard/Cameras'
import { Geofences } from './pages/dashboard/Geofences'
import { Alerts } from './pages/dashboard/Alerts'
import { Analytics } from './pages/dashboard/Analytics'
import { Settings } from './pages/dashboard/Settings'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem('token')
  return token ? <>{children}</> : <Navigate to="/login" />
}

const PublicRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem('token')
  return !token ? <>{children}</> : <Navigate to="/dashboard" />
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    )
  },
  {
    path: '/signup',
    element: (
      <PublicRoute>
        <Signup />
      </PublicRoute>
    )
  },
  {
    path: '/dashboard',
    element: (
     
        <Dashboard />
     
    ),
    children: [
      {
        index: true,
        element: <Overview />
      },
      {
        path: 'cameras',
        element: <Cameras />
      },
      {
        path: 'geofences',
        element: <Geofences />
      },
      {
        path: 'alerts',
        element: <Alerts />
      },
      {
        path: 'analytics',
        element: <Analytics />
      },
      {
        path: 'settings',
        element: <Settings />
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])