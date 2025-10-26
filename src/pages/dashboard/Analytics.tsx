import React from 'react'
import { BarChart3, TrendingUp, TrendingDown, Activity } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
        <p className="text-dark-gray4">View detailed analytics and insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card hover>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-dark-gray4 text-sm mb-1">Detection Rate</p>
                <p className="text-3xl font-bold text-white">94.5%</p>
                <p className="text-status-green text-sm flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +5.2% this week
                </p>
              </div>
              <div className="p-3 rounded-lg bg-dark-gray1 text-status-green">
                <Activity className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card hover>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-dark-gray4 text-sm mb-1">Avg Response Time</p>
                <p className="text-3xl font-bold text-white">1.2s</p>
                <p className="text-status-green text-sm flex items-center mt-1">
                  <TrendingDown className="w-4 h-4 mr-1" />
                  -0.3s improvement
                </p>
              </div>
              <div className="p-3 rounded-lg bg-dark-gray1 text-blue-400">
                <BarChart3 className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card hover>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-dark-gray4 text-sm mb-1">False Positives</p>
                <p className="text-3xl font-bold text-white">2.1%</p>
                <p className="text-status-red text-sm flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +0.5% this week
                </p>
              </div>
              <div className="p-3 rounded-lg bg-dark-gray1 text-status-yellow">
                <Activity className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Detection Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-dark-gray1 rounded-lg h-64 flex items-center justify-center border border-dark-gray3">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-primary-orange mx-auto mb-2" />
              <p className="text-dark-gray4">Chart visualization</p>
              <p className="text-dark-gray3 text-sm mt-1">Recharts integration coming soon</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Hourly Detection Pattern</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-dark-gray1 rounded-lg h-48 flex items-center justify-center border border-dark-gray3">
              <p className="text-dark-gray4">Hourly chart</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Camera Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-dark-gray1 rounded-lg h-48 flex items-center justify-center border border-dark-gray3">
              <p className="text-dark-gray4">Performance metrics</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
