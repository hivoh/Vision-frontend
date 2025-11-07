import React, { useState } from 'react'
import { Maximize2, Minimize2 } from 'lucide-react'

const FullscreenButton: React.FC = () => {
  const [isFull, setIsFull] = useState<boolean>(() => !!document.fullscreenElement)

  const toggleFull = async () => {
    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen()
        setIsFull(true)
      } catch (e) {
        console.warn('Fullscreen request failed', e)
      }
    } else {
      try {
        await document.exitFullscreen()
        setIsFull(false)
      } catch (e) {
        console.warn('Exit fullscreen failed', e)
      }
    }
  }

  return (
    <button
      aria-label={isFull ? 'Exit full screen' : 'Enter full screen'}
      onClick={toggleFull}
      className="p-2 rounded-lg hover:bg-dark-gray1 transition-colors"
    >
      {isFull ? <Minimize2 className="w-5 h-5 text-dark-gray4" /> : <Maximize2 className="w-5 h-5 text-dark-gray4" />}
    </button>
  )
}

export default FullscreenButton