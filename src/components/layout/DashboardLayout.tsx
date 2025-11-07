import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { DashboardHeader } from './DashboardHeader'
import { DashboardSidebar } from './DashboardSidebar'

export const DashboardLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-dark-gray1 transition-colors duration-300">
      <DashboardHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex">
        <DashboardSidebar isOpen={sidebarOpen} />

        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'ml-0'}`}>
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}