import React, { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-dark-gray4 mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-gray3">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`w-full bg-dark-gray1 border ${
              error ? 'border-status-red' : 'border-dark-gray3'
            } text-dark-gray6 rounded-lg px-4 py-2.5 ${
              icon ? 'pl-10' : ''
            } focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 placeholder:text-dark-gray3 ${className}`}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-status-red">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
