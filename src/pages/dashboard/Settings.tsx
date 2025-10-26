import React, { useState } from 'react'
import { Save } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import toast from 'react-hot-toast'

export const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    companyName: 'SecureVision Inc.',
    email: 'admin@securevision.com',
    notificationEmail: 'alerts@securevision.com',
    enableEmailAlerts: true,
    enablePushNotifications: true,
    detectionSensitivity: '75',
    retentionDays: '30'
  })

  const handleSave = () => {
    toast.success('Settings saved successfully!')
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-dark-gray4">Manage your account and system preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              label="Company Name"
              value={settings.companyName}
              onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
            />
            <Input
              label="Email Address"
              type="email"
              value={settings.email}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              label="Notification Email"
              type="email"
              value={settings.notificationEmail}
              onChange={(e) => setSettings({ ...settings, notificationEmail: e.target.value })}
            />
            <div className="space-y-3">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.enableEmailAlerts}
                  onChange={(e) => setSettings({ ...settings, enableEmailAlerts: e.target.checked })}
                  className="w-4 h-4 rounded border-dark-gray3 bg-dark-gray1 text-primary-orange focus:ring-primary-orange"
                />
                <span className="text-dark-gray4">Enable email alerts</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.enablePushNotifications}
                  onChange={(e) => setSettings({ ...settings, enablePushNotifications: e.target.checked })}
                  className="w-4 h-4 rounded border-dark-gray3 bg-dark-gray1 text-primary-orange focus:ring-primary-orange"
                />
                <span className="text-dark-gray4">Enable push notifications</span>
              </label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detection Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-dark-gray4 mb-2">
                Detection Sensitivity: {settings.detectionSensitivity}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={settings.detectionSensitivity}
                onChange={(e) => setSettings({ ...settings, detectionSensitivity: e.target.value })}
                className="w-full h-2 bg-dark-gray1 rounded-lg appearance-none cursor-pointer accent-primary-orange"
              />
              <div className="flex justify-between text-xs text-dark-gray3 mt-1">
                <span>Low</span>
                <span>High</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Retention</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              label="Retention Period (days)"
              type="number"
              value={settings.retentionDays}
              onChange={(e) => setSettings({ ...settings, retentionDays: e.target.value })}
            />
            <p className="text-sm text-dark-gray3">
              Data older than this will be automatically deleted
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button size="md" onClick={handleSave}>
          <Save className="w-5 h-5 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  )
}
