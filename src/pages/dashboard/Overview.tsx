import React from 'react'
import { Camera, MapPin, Bell, Activity } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'

export const Overview: React.FC = () => {
  const stats = [
    {
      title: 'Active Cameras',
      value: '24',
      change: '+2 from last week',
      icon: Camera,
      color: 'text-status-green'
    },
    {
      title: 'Geofences',
      value: '8',
      change: '3 active alerts',
      icon: MapPin,
      color: 'text-primary-orange'
    },
    {
      title: 'Detections Today',
      value: '156',
      change: '+12% from yesterday',
      icon: Activity,
      color: 'text-blue-400'
    },
    {
      title: 'Active Alerts',
      value: '3',
      change: 'Requires attention',
      icon: Bell,
      color: 'text-status-red'
    }
  ]

  const recentDetections = [
    { id: 1, camera: 'Main Entrance', time: '2 mins ago', status: 'active' },
    { id: 2, camera: 'Parking Lot A', time: '15 mins ago', status: 'resolved' },
    { id: 3, camera: 'Back Gate', time: '1 hour ago', status: 'active' },
    { id: 4, camera: 'Side Door', time: '2 hours ago', status: 'resolved' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-dark-gray4">Monitor your surveillance system in real-time</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} hover>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-dark-gray4 text-sm mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-dark-gray3 text-xs">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg bg-dark-gray1 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Detections</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-dark-gray3">
              {recentDetections.map((detection) => (
                <div key={detection.id} className="p-4 hover:bg-dark-gray1 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">{detection.camera}</p>
                      <p className="text-dark-gray4 text-sm">{detection.time}</p>
                    </div>
                    <Badge variant={detection.status === 'active' ? 'warning' : 'success'}>
                      {detection.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-dark-gray4 text-sm">Camera Uptime</span>
                  <span className="text-white font-medium">99.8%</span>
                </div>
                <div className="w-full bg-dark-gray1 rounded-full h-2">
                  <div className="bg-status-green h-2 rounded-full" style={{ width: '99.8%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-dark-gray4 text-sm">Processing Speed</span>
                  <span className="text-white font-medium">24 FPS</span>
                </div>
                <div className="w-full bg-dark-gray1 rounded-full h-2">
                  <div className="bg-primary-orange h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-dark-gray4 text-sm">Storage Used</span>
                  <span className="text-white font-medium">67%</span>
                </div>
                <div className="w-full bg-dark-gray1 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Live Map View</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-dark-gray1 rounded-lg aspect-video flex items-center justify-center border border-dark-gray3">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary-orange mx-auto mb-2" />
              <p className="text-dark-gray4">Interactive map with camera locations</p>
              <p className="text-dark-gray3 text-sm mt-1">Map integration coming soon</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
