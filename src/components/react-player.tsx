'use client'

import { useAppDispatch } from '@/hooks/use-app-dispatch'
import { useCurrentContent } from '@/hooks/use-current-content'
import { nextLesson } from '@/lib/features/player/player-slice'
import { useEffect, useState } from 'react'
import Player from 'react-player'

export function ReactPlayer() {
  const dispatch = useAppDispatch()

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
