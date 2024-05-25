'use client'

import { nextLesson } from '@/lib/features/player/player-slice'
import { useAppSelector } from '@/lib/store'
import { useEffect, useState } from 'react'
import Player from 'react-player'
import { useDispatch } from 'react-redux'

export function ReactPlayer() {
  const dispatch = useDispatch()

  const { id } = useAppSelector((state) => {
    const { lessonIndex, moduleIndex } = state.player.currentLesson
    return state.player.course.modules[moduleIndex].lessons[lessonIndex]
  })

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
