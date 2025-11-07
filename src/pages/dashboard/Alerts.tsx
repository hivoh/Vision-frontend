import React, { useState } from 'react'
import { Bell, CheckCircle, XCircle, Clock } from 'lucide-react'
import { Card, CardContent } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'

interface Alert {
  id: string
  camera: string
  type: 'intrusion' | 'detection' | 'system'
  severity: 'high' | 'medium' | 'low'
  message: string
  timestamp: string
  status: 'active' | 'resolved' | 'dismissed'
}

export const Alerts: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'active' | 'resolved'>('all')
  const [alerts] = useState<Alert[]>([
    {
      id: '1',
      camera: 'Main Entrance',
      type: 'intrusion',
      severity: 'high',
      message: 'Person detected in restricted zone',
      timestamp: '2 mins ago',
      status: 'active'
    },
    {
      id: '2',
      camera: 'Parking Lot A',
      type: 'detection',
      severity: 'medium',
      message: 'Human detected outside business hours',
      timestamp: '15 mins ago',
      status: 'active'
    },
    {
      id: '3',
      camera: 'Back Gate',
      type: 'intrusion',
      severity: 'high',
      message: 'Geofence breach detected',
      timestamp: '1 hour ago',
      status: 'resolved'
    },
    {
      id: '4',
      camera: 'System',
      type: 'system',
      severity: 'low',
      message: 'Camera connection restored',
      timestamp: '2 hours ago',
      status: 'resolved'
    }
  ])

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'high':
        return <Badge variant="error">High</Badge>
      case 'medium':
        return <Badge variant="warning">Medium</Badge>
      case 'low':
        return <Badge variant="info">Low</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'intrusion':
        return <XCircle className="w-5 h-5 text-status-red" />
      case 'detection':
        return <Bell className="w-5 h-5 text-status-yellow" />
      case 'system':
        return <CheckCircle className="w-5 h-5 text-blue-400" />
      default:
        return <Bell className="w-5 h-5" />
    }
  }

  const filteredAlerts = alerts.filter(alert =>
    filter === 'all' || alert.status === filter
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-dark-gray6 mb-2">Alert Management</h1>
          <p className="text-dark-gray4">Monitor and manage system alerts</p>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('all')}
        >
          All Alerts
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('active')}
        >
          Active
        </Button>
        <Button
          variant={filter === 'resolved' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('resolved')}
        >
          Resolved
        </Button>
      </div>

      <div className="space-y-4">
        {filteredAlerts.map((alert) => (
          <Card key={alert.id} hover>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {getTypeIcon(alert.type)}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-dark-gray6">{alert.camera}</h3>
                        {getSeverityBadge(alert.severity)}
                      </div>
                      <p className="text-dark-gray4">{alert.message}</p>
                    </div>
                    {alert.status === 'active' && (
                      <Badge variant="warning">Active</Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-dark-gray3 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {alert.timestamp}
                    </div>
                    {alert.status === 'active' && (
                      <div className="flex gap-2">
                        <Button variant="secondary" size="sm">
                          Dismiss
                        </Button>
                        <Button variant="primary" size="sm">
                          Resolve
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAlerts.length === 0 && (
        <div className="text-center py-12">
          <Bell className="w-12 h-12 text-dark-gray3 mx-auto mb-4" />
          <p className="text-dark-gray4 text-lg">No alerts found</p>
        </div>
      )}
    </div>
  )
}
