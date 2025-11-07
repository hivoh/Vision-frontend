import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-dark-gray1">
      {/* Sidebar placeholder for non-dashboard pages */}
      <div className="hidden lg:block w-64">Sidebar Component</div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="border-b border-dark-gray3">Header Component</div>
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}

export default Layout
