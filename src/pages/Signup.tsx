import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, VenetianMask, Mail, Lock, User, Building } from 'lucide-react'
import toast from 'react-hot-toast'
import GoldParticles from '../components/ui/GoldParticle'

interface SignupFormData {
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  company: string
  acceptTerms: boolean
}

const Signup: React.FC = () => {
  const [step, setStep] = useState<number>(1)
  const [formData, setFormData] = useState<SignupFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    company: '',
    acceptTerms: false
  })
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
  
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    })
  }

  const validateStep1 = (): boolean => {
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      toast.error('Please fill in all fields')
      return false
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match')
      return false
    }
    if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters')
      return false
    }
    return true
  }

  const validateStep2 = (): boolean => {
    if (!formData.firstName || !formData.lastName) {
      toast.error('Please fill in all required fields')
      return false
    }
    if (!formData.acceptTerms) {
      toast.error('Please accept the terms and conditions')
      return false
    }
    return true
  }

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    }
  }

  const handleBack = () => {
    setStep(1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (step === 2 && validateStep2()) {
      // Simulate API call
      setTimeout(() => {
        toast.success('Account created successfully! Please check your email for verification.')
        navigate('/login')
      }, 2000)
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
            <span className="text-2xl font-bold text-white">Vision</span>
          </div>
          <h2 className="text-3xl font-bold text-white">Create your account</h2>
          <p className="mt-2 text-dark-gray4">
            Or{' '}
            <Link to="/login" className="text-primary-orange hover:text-opacity-80">
              sign in to existing account
            </Link>
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          {[1, 2].map((stepNumber) => (
            <React.Fragment key={stepNumber}>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                step >= stepNumber 
                  ? 'bg-primary-orange border-primary-orange text-white' 
                  : 'border-dark-gray3 text-dark-gray3'
              }`}>
                {stepNumber}
              </div>
              {stepNumber < 2 && (
                <div className={`w-12 h-1 ${
                  step > stepNumber ? 'bg-primary-orange' : 'bg-dark-gray3'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Signup Form */}
        <form className="bg-dark-gray2 p-8 rounded-xl border border-dark-gray3" onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4">
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
                    className="w-full pl-10 pr-4 py-3 bg-dark-gray1 border border-dark-gray3 rounded-lg text-white placeholder-dark-gray3 focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

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
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 bg-dark-gray1 border border-dark-gray3 rounded-lg text-white placeholder-dark-gray3 focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-gray3 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <p className="mt-1 text-xs text-dark-gray3">
                  Must be at least 8 characters
                </p>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-dark-gray4 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-gray3 w-5 h-5" />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 bg-dark-gray1 border border-dark-gray3 rounded-lg text-white placeholder-dark-gray3 focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-gray3 hover:text-white"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full bg-primary-orange text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition mt-6"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-dark-gray4 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-gray3 w-5 h-5" />
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-dark-gray1 border border-dark-gray3 rounded-lg text-white placeholder-dark-gray3 focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange"
                      placeholder="First name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-dark-gray4 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-gray3 w-5 h-5" />
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-dark-gray1 border border-dark-gray3 rounded-lg text-white placeholder-dark-gray3 focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-dark-gray4 mb-2">
                  Company (Optional)
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-gray3 w-5 h-5" />
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-dark-gray1 border border-dark-gray3 rounded-lg text-white placeholder-dark-gray3 focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="w-4 h-4 text-primary-orange bg-dark-gray1 border-dark-gray3 rounded focus:ring-primary-orange focus:ring-2"
                />
                <label htmlFor="acceptTerms" className="ml-2 block text-sm text-dark-gray4">
                  I agree to the{' '}
                  <a href="#" className="text-primary-orange hover:text-opacity-80">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-primary-orange hover:text-opacity-80">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div className="flex space-x-4 mt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 bg-dark-gray1 text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-80 transition border border-dark-gray3"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary-orange text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition"
                >
                  Create Account
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Signup