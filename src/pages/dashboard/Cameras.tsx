import React, { useState } from 'react'
import { Plus, Search, Play, Pause, Settings, Trash2, MapPin } from 'lucide-react'
import { Card, CardContent } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Badge } from '../../components/ui/Badge'

interface Camera {
  id: string
  name: string
  location: string
  status: 'online' | 'offline' | 'processing'
  streamUrl: string
  detections: number
  lastSeen: string
}

export const Cameras: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [cameras] = useState<Camera[]>([
    {
      id: '1',
      name: 'Main Entrance',
      location: 'Building A - Front',
      status: 'online',
      streamUrl: 'rtsp://example.com/stream1',
      detections: 45,
      lastSeen: '2 mins ago'
    },
    {
      id: '2',
      name: 'Parking Lot A',
      location: 'West Side',
      status: 'processing',
      streamUrl: 'rtsp://example.com/stream2',
      detections: 23,
      lastSeen: '5 mins ago'
    },
    {
      id: '3',
      name: 'Back Gate',
      location: 'Building B - Rear',
      status: 'online',
      streamUrl: 'rtsp://example.com/stream3',
      detections: 67,
      lastSeen: '1 min ago'
    },
    {
      id: '4',
      name: 'Reception Area',
      location: 'Main Lobby',
      status: 'offline',
      streamUrl: 'rtsp://example.com/stream4',
      detections: 0,
      lastSeen: '2 hours ago'
    }
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'online':
        return <Badge variant="success">Online</Badge>
      case 'offline':
        return <Badge variant="error">Offline</Badge>
      case 'processing':
        return <Badge variant="warning">Processing</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  const filteredCameras = cameras.filter(camera =>
    camera.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    camera.location.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-dark-gray6 mb-2">Camera Management</h1>
          <p className="text-dark-gray4">Manage and monitor all your CCTV cameras</p>
        </div>
        <Button size="md" className="w-full sm:w-auto">
          <Plus className="w-5 h-5 mr-2" />
          Add Camera
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search cameras by name or location..."
            icon={<Search className="w-5 h-5" />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCameras.map((camera) => (
          <Card key={camera.id} hover>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="aspect-video bg-dark-gray1 rounded-lg flex items-center justify-center border border-dark-gray3">
                  <div className="text-center">
                    <Play className="w-12 h-12 text-dark-gray3 mx-auto mb-2" />
                    <p className="text-dark-gray4 text-sm">Camera Feed</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-dark-gray6">{camera.name}</h3>
                      <p className="text-dark-gray4 text-sm flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {camera.location}
                      </p>
                    </div>
                    {getStatusBadge(camera.status)}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-dark-gray4">Detections: {camera.detections}</span>
                    <span className="text-dark-gray3">{camera.lastSeen}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="secondary" size="sm" className="flex-1">
                    {camera.status === 'online' ? (
                      <>
                        <Pause className="w-4 h-4 mr-1" />
                        Stop
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-1" />
                        Start
                      </>
                    )}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="w-4 h-4 text-status-red" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCameras.length === 0 && (
        <div className="text-center py-12">
          <p className="text-dark-gray4 text-lg">No cameras found matching your search.</p>
        </div>
      )}
    </div>
  )
}
