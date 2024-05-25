'use client'

import { useCurrentContent } from '@/hooks/use-current-content'
import { nextLesson } from '@/lib/features/player/player-slice'
import { useEffect, useState } from 'react'
import Player from 'react-player'
import { useDispatch } from 'react-redux'

export function ReactPlayer() {
  const dispatch = useDispatch()

  const {
    lesson: { id },
  } = useCurrentContent()

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
          url={`https://www.youtube.com/watch?v=${id}`}
          onEnded={() => dispatch(nextLesson())}
          playing
          controls
        />
      )}
    </div>
  )
}
