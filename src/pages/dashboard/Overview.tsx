import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MapContainer, TileLayer } from 'react-leaflet'
import type { LatLngExpression} from 'leaflet'

const Overview: React.FC = () => {
  const navigate = useNavigate()
  const miniCenter: LatLngExpression = [51.505, -0.09]

  return (
    <div className="space-y-6">
      <header className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-dark-gray6">Overview</h1>
          <p className="text-sm text-dark-gray4 mt-1">Quick view of your site and live activity</p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => navigate('/dashboard/map')}
            className="px-4 py-2 rounded-md bg-primary-orange text-white hover:opacity-95 transition"
          >
            Open Live Map
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-2 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-dark-gray2 border border-dark-gray3">
              <div className="text-sm text-dark-gray4">Active Cameras</div>
              <div className="text-2xl font-bold text-dark-gray6">24</div>
            </div>
            <div className="p-4 rounded-lg bg-dark-gray2 border border-dark-gray3">
              <div className="text-sm text-dark-gray4">Alerts (24h)</div>
              <div className="text-2xl font-bold text-dark-gray6">3</div>
            </div>
            <div className="p-4 rounded-lg bg-dark-gray2 border border-dark-gray3">
              <div className="text-sm text-dark-gray4">Incidents</div>
              <div className="text-2xl font-bold text-dark-gray6">1</div>
            </div>
          </div>

          <div className="rounded-lg bg-dark-gray2 border border-dark-gray3 overflow-hidden h-64">
            {/* Mini map preview - lightweight */}
            <MapContainer
              center={miniCenter}
              zoom={13}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution={'© OpenStreetMap contributors'}
              />
            </MapContainer>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="p-4 rounded-lg bg-dark-gray2 border border-dark-gray3">
            <div className="text-sm text-dark-gray4">Security Status</div>
            <div className="text-xl font-semibold text-dark-gray6 mt-2">All systems nominal</div>
            <div className="text-xs text-dark-gray4 mt-1">No critical alerts</div>
          </div>

          <div className="p-4 rounded-lg bg-dark-gray2 border border-dark-gray3">
            <div className="text-sm text-dark-gray4">Quick Actions</div>
            <div className="mt-3 flex flex-col space-y-2">
              <button className="text-left px-3 py-2 rounded text-dark-gray4 bg-transparent hover:bg-dark-gray1 transition">Create Alert</button>
              <button className="text-left px-3 py-2 rounded text-dark-gray4 bg-transparent hover:bg-dark-gray1 transition">Export Logs</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Overview
