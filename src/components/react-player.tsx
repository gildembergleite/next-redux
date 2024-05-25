'use client'

import { useEffect, useState } from 'react'
import Player from 'react-player'

export function ReactPlayer() {
  const [isClientLoaded, setIsClientLoaded] = useState(false)

  useEffect(() => {
    setIsClientLoaded(true)
  }, [])

  return (
    <div className="min-w-full aspect-video">
      {isClientLoaded && (
        <Player
          width={'100%'}
          height={'100%'}
          url={'https://www.youtube.com/watch?v=jfKfPfyJRdk'}
          controls
        />
      )}
    </div>
  )
}
