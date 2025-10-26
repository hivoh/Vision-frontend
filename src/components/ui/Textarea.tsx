import React, { forwardRef } from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-dark-gray4 mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`w-full bg-dark-gray1 border ${
            error ? 'border-status-red' : 'border-dark-gray3'
          } text-dark-gray6 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 placeholder:text-dark-gray3 resize-none ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-status-red">{error}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
