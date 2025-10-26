import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import ErrorPage from './pages/ErrorPage'
// import ForgotPassword from './pages/auth/ForgotPassword'
// import ResetPassword from './pages/auth/ResetPassword'

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
  //{
  //   path: '/forgot-password',
  //   element: (
  //     <PublicRoute>
  //       <ForgotPassword />
  //     </PublicRoute>
  //   )
  // },
  // {
  //   path: '/reset-password',
  //   element: (
  //     <PublicRoute>
  //       <ResetPassword />
  //     </PublicRoute>
  //   )
  // },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    )
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])