import React from 'react'
import { Bell, User, Menu, VenetianMask } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface DashboardHeaderProps {
  onMenuClick: () => void
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onMenuClick }) => {
  const navigate = useNavigate()
  
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <header className="bg-dark-gray2 border-b border-dark-gray3 sticky top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-lg hover:bg-dark-gray1 transition-colors lg:hidden"
            >
              <Menu className="w-6 h-6 text-dark-gray4" />
            </button>
            
            <div className="flex items-center space-x-2">
              <VenetianMask className="w-8 h-8 text-primary-orange" />
              <span className="text-xl font-bold text-white hidden sm:block">Vision</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 rounded-lg hover:bg-dark-gray1 transition-colors">
              <Bell className="w-6 h-6 text-dark-gray4" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-status-red rounded-full"></span>
            </button>

            <div className="relative group">
              <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-dark-gray1 transition-colors">
                <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="text-dark-gray4 hidden sm:block">Admin</span>
              </button>
              
              <div className="absolute right-0 mt-2 w-48 bg-dark-gray2 border border-dark-gray3 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <button className="w-full px-4 py-2 text-left text-dark-gray4 hover:bg-dark-gray1 hover:text-white transition-colors">
                    Profile
                  </button>
                  <button className="w-full px-4 py-2 text-left text-dark-gray4 hover:bg-dark-gray1 hover:text-white transition-colors">
                    Settings
                  </button>
                  <hr className="my-2 border-dark-gray3" />
                  <button 
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-status-red hover:bg-dark-gray1 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
