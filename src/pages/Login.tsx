import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Eye, EyeOff, VenetianMask, Mail, Lock } from 'lucide-react'
import { loginStart, loginSuccess, loginFailure } from '../store/slices/authSlice'
import toast from 'react-hot-toast'
import { RootState } from '../store'
import GoldParticles from "../components/ui/GoldParticle"


interface LoginFormData {
  email: string
  password: string
  rememberMe: boolean
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false
  })
  const [showPassword, setShowPassword] = useState<boolean>(false)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoading, error } = useSelector((state: RootState) => state.auth)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email || !formData.password) {
      dispatch(loginFailure('Please fill in all fields'))
      return
    }

    dispatch(loginStart())
    
    try {
      // Simulate API call
      setTimeout(() => {
        if (formData.email === 'demo@vision.com' && formData.password === 'password') {
          const mockUser = {
            id: 1,
            name: 'Demo User',
            email: formData.email,
            role: 'admin'
          }
          const mockToken = 'mock-jwt-token'
          
          dispatch(loginSuccess({ user: mockUser, token: mockToken }))
          toast.success('Login successful!')
          navigate('/dashboard')
        } else {
          dispatch(loginFailure('Invalid email or password'))
          toast.error('Invalid email or password')
        }
      }, 1500)
    } catch (err) {
      dispatch(loginFailure('Login failed. Please try again.'))
      toast.error('Login failed. Please try again.')
    }
  }

  return (
    <div className="relative min-h-screen bg-dark-gray1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <GoldParticles />
    <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <VenetianMask className="w-10 h-10 text-primary-orange" />
            <span className="text-2xl font-bold text-dark-gray6">Vision</span>
          </div>
          <h2 className="text-3xl font-bold text-dark-gray6">Sign in to your account</h2>
          <p className="mt-2 text-dark-gray4">
            Or{' '}
            <Link to="/signup" className="text-primary-orange hover:text-opacity-80">
              create a new account
            </Link>
          </p>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6 bg-dark-gray2 p-8 rounded-xl border border-dark-gray3" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-status-red bg-opacity-20 border border-status-red text-dark-gray6 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark-gray4 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-gray3 w-5 h-5" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-dark-gray1 border border-dark-gray3 rounded-lg text-dark-gray6 placeholder-dark-gray3 focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-dark-gray4 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-gray3 w-5 h-5" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 bg-dark-gray1 border border-dark-gray3 rounded-lg text-dark-gray6 placeholder-dark-gray3 focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-gray3 hover:text-dark-gray6"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 text-primary-orange bg-dark-gray1 border-dark-gray3 rounded focus:ring-primary-orange focus:ring-2"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-dark-gray4">
                Remember me
              </label>
            </div>

            <Link to="/forgot-password" className="text-sm text-primary-orange hover:text-opacity-80">
              Forgot your password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary-orange text-dark-gray6 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            ) : null}
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-dark-gray1 rounded-lg border border-dark-gray3">
            <p className="text-sm text-dark-gray4 text-center">
              Demo credentials: <br />
              <span className="text-primary-orange">demo@vision.com</span> / <span className="text-primary-orange">password</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login