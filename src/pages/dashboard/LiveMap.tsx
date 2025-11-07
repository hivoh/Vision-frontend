import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import type { LatLngExpression, Map as LeafletMap } from 'leaflet'
import { Fullscreen, ZoomIn, ZoomOut } from 'lucide-react'

// small helper to recenter map when markers update
const Recenter = ({ lat, lng }: { lat: number; lng: number }) => {
  const map = useMap()
  useEffect(() => {
    map.setView([lat, lng])
  }, [lat, lng, map])
  return null
}

const LiveMap: React.FC = () => {
  const [markers] = useState(
    // sample markers, in real app replace with props or store
    [
      { id: 1, lat: 51.505, lng: -0.09, label: 'Camera 1' },
      { id: 2, lat: 51.51, lng: -0.1, label: 'Camera 2' },
    ]
  )

  const [mapInstance, setMapInstance] = useState<LeafletMap | null>(null)
  const [isFull, setIsFull] = useState(false)

  useEffect(() => {
    const onFsChange = () => setIsFull(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  const toggleFull = async () => {
    if (!document.fullscreenElement) {
      try {
        await document.getElementById('live-map')?.requestFullscreen()
      } catch (e) {
        console.warn(e)
      }
    } else {
      await document.exitFullscreen()
    }
  }

  const center: LatLngExpression = [markers[0].lat, markers[0].lng]

  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-dark-gray6">Live Map</h2>
          <p className="text-sm text-dark-gray4">Real-time camera and event locations</p>
        </div>

        <div className="flex items-center space-x-2">
          <button onClick={toggleFull} className="p-2 rounded-md hover:bg-dark-gray1 transition">
            <Fullscreen className="w-5 h-5 text-dark-gray4" />
          </button>
          <button onClick={() => mapInstance?.zoomIn()} className="p-2 rounded-md hover:bg-dark-gray1 transition">
            <ZoomIn className="w-5 h-5 text-dark-gray4" />
          </button>
          <button onClick={() => mapInstance?.zoomOut()} className="p-2 rounded-md hover:bg-dark-gray1 transition">
            <ZoomOut className="w-5 h-5 text-dark-gray4" />
          </button>
        </div>
      </header>

      <div id="live-map" className="rounded-lg overflow-hidden border border-dark-gray3 bg-dark-gray2 h-[70vh]">
        <MapContainer
          center={center}
          zoom={13}
          className="h-full w-full"
          whenCreated={(map) => setMapInstance(map)}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution={'© OpenStreetMap contributors'}
          />

          {markers.map((m) => (
            <Marker key={m.id} position={[m.lat, m.lng] as LatLngExpression}>
              <Popup>
                <div className="font-semibold">{m.label}</div>
                <div className="text-sm text-dark-gray4">Status: Active</div>
              </Popup>
            </Marker>
          ))}

          <Recenter lat={markers[0].lat} lng={markers[0].lng} />
        </MapContainer>
      </div>
    </div>
  )
}

export default LiveMap