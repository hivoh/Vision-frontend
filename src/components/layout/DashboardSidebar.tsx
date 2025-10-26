import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Camera, 
  MapPin, 
  Bell, 
  Settings,
  BarChart3 
} from 'lucide-react'

interface DashboardSidebarProps {
  isOpen: boolean
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ isOpen }) => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
    { icon: Camera, label: 'Cameras', path: '/dashboard/cameras' },
    { icon: MapPin, label: 'Geofences', path: '/dashboard/geofences' },
    { icon: Bell, label: 'Alerts', path: '/dashboard/alerts' },
    { icon: BarChart3, label: 'Analytics', path: '/dashboard/analytics' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ]

  return (
    <>
      <aside
        className={`fixed top-21 left-0 h-[calc(100vh-4rem)] bg-dark-gray2 border-r border-dark-gray3 transition-all duration-300 z-40 ${
          isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:w-16 lg:translate-x-0'
        }`}
      >
        <nav className="p-4 space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/dashboard'}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-orange text-white'
                    : 'text-dark-gray4 hover:bg-dark-gray1 hover:text-white'
                }`
              }
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className={`${isOpen ? 'block' : 'lg:hidden'}`}>
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}
