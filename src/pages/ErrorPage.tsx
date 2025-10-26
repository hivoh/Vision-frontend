import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import { Shield, Home, ArrowLeft } from 'lucide-react'

interface RouteError {
  status?: number
  data?: {
    message?: string
  }
}

const ErrorPage: React.FC = () => {
  const error = useRouteError() as RouteError
  
  const errorMessages = {
    404: {
      title: 'Page Not Found',
      description: 'The page you are looking for does not exist or has been moved.',
      emoji: '🔍'
    },
    500: {
      title: 'Server Error',
      description: 'Something went wrong on our servers. Please try again later.',
      emoji: '🚧'
    },
    403: {
      title: 'Access Denied',
      description: 'You do not have permission to access this page.',
      emoji: '🚫'
    },
    default: {
      title: 'Unexpected Error',
      description: 'An unexpected error has occurred. Please try again.',
      emoji: '😵'
    }
  }

  const getErrorDetails = (status?: number) => {
    return status && status in errorMessages ? errorMessages[status as keyof typeof errorMessages] : errorMessages.default
  }

  const errorDetails = getErrorDetails(error?.status)

  return (
    <div className="min-h-screen bg-dark-gray1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-32 h-32 bg-dark-gray2 rounded-full flex items-center justify-center mx-auto border-4 border-dark-gray3">
            <span className="text-4xl">{errorDetails.emoji}</span>
          </div>
        </div>

        {/* Error Content */}
        <div className="bg-dark-gray2 p-8 rounded-xl border border-dark-gray3">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="w-8 h-8 text-primary-orange" />
            <span className="text-2xl font-bold text-white">SecureVision</span>
          </div>

          <h1 className="text-6xl font-bold text-white mb-4">{error?.status || 'Error'}</h1>
          <h2 className="text-2xl font-semibold text-white mb-4">{errorDetails.title}</h2>
          <p className="text-dark-gray4 text-lg mb-6">{errorDetails.description}</p>

          {error?.data?.message && (
            <div className="bg-dark-gray1 p-4 rounded-lg border border-dark-gray3 mb-6">
              <p className="text-status-red text-sm">{error.data.message}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center px-6 py-3 border border-dark-gray3 text-dark-gray4 rounded-lg hover:bg-dark-gray1 hover:text-white transition"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
            <Link
              to="/"
              className="flex items-center justify-center px-6 py-3 bg-primary-orange text-white rounded-lg hover:bg-opacity-90 transition"
            >
              <Home className="w-5 h-5 mr-2" />
              Home Page
            </Link>
          </div>

          {/* Support Contact */}
          <div className="mt-8 pt-6 border-t border-dark-gray3">
            <p className="text-dark-gray4 text-sm">
              Need help?{' '}
              <a href="mailto:support@securevision.com" className="text-primary-orange hover:text-opacity-80">
                Contact our support team
              </a>
            </p>
          </div>
        </div>

        {/* Technical Details (Development) */}
        {import.meta.env.DEV && error && (
          <div className="mt-6 p-4 bg-dark-gray2 rounded-lg border border-status-red">
            <h3 className="text-status-red font-semibold mb-2">Development Error Details:</h3>
            <pre className="text-xs text-dark-gray4 overflow-auto">
              {JSON.stringify(error, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default ErrorPage