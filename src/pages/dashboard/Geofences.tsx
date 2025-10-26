import React, { useState } from 'react'
import { Plus, MapPin, Edit2, Trash2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'

interface Geofence {
  id: string
  name: string
  description: string
  coordinates: [number, number][]
  cameras: number
  alerts: number
  status: 'active' | 'inactive'
}

export const Geofences: React.FC = () => {
  const [geofences] = useState<Geofence[]>([
    {
      id: '1',
      name: 'Restricted Area 1',
      description: 'High security zone near main building',
      coordinates: [[0, 0], [1, 1]],
      cameras: 3,
      alerts: 12,
      status: 'active'
    },
    {
      id: '2',
      name: 'Parking Zone',
      description: 'Employee parking monitoring area',
      coordinates: [[0, 0], [1, 1]],
      cameras: 2,
      alerts: 5,
      status: 'active'
    },
    {
      id: '3',
      name: 'Perimeter Fence',
      description: 'Outer boundary detection zone',
      coordinates: [[0, 0], [1, 1]],
      cameras: 5,
      alerts: 8,
      status: 'inactive'
    }
  ])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Geofence Management</h1>
          <p className="text-dark-gray4">Create and manage virtual boundaries for detection zones</p>
        </div>
        <Button size="lg" className="w-full sm:w-auto">
          <Plus className="w-5 h-5 mr-2" />
          Create Geofence
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-dark-gray1 rounded-lg aspect-video flex items-center justify-center border border-dark-gray3">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary-orange mx-auto mb-2" />
              <p className="text-dark-gray4">Draw geofences on the map</p>
              <p className="text-dark-gray3 text-sm mt-1">Map integration with drawing tools</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {geofences.map((geofence) => (
          <Card key={geofence.id} hover>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{geofence.name}</h3>
                  <p className="text-dark-gray4 text-sm">{geofence.description}</p>
                </div>
                <Badge variant={geofence.status === 'active' ? 'success' : 'default'}>
                  {geofence.status}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-dark-gray1 rounded-lg p-3">
                  <p className="text-dark-gray4 text-sm mb-1">Cameras</p>
                  <p className="text-2xl font-bold text-white">{geofence.cameras}</p>
                </div>
                <div className="bg-dark-gray1 rounded-lg p-3">
                  <p className="text-dark-gray4 text-sm mb-1">Alerts</p>
                  <p className="text-2xl font-bold text-primary-orange">{geofence.alerts}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="secondary" size="sm" className="flex-1">
                  <Edit2 className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="w-4 h-4 text-status-red" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
