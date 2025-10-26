import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'success' | 'warning' | 'error' | 'info' | 'default'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const variants = {
    success: 'bg-status-green/20 text-status-green border-status-green',
    warning: 'bg-status-yellow/20 text-status-yellow border-status-yellow',
    error: 'bg-status-red/20 text-status-red border-status-red',
    info: 'bg-blue-500/20 text-blue-400 border-blue-400',
    default: 'bg-dark-gray2 text-dark-gray4 border-dark-gray3'
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
