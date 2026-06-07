"use client"

import { useState, useEffect, useRef } from "react"
import { Music2, Play, Pause } from "lucide-react"

const songs = [
  { 
    title: "Ambient Lounge", 
    artist: "Music Lab",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  { 
    title: "Soft Background", 
    artist: "Music Lab",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  { 
    title: "Elevator Jazz", 
    artist: "Music Lab",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  { 
    title: "Peaceful Store", 
    artist: "Music Lab",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  { 
    title: "Shopping Vibes", 
    artist: "Music Lab",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
  },
  { 
    title: "Smooth Relaxation", 
    artist: "Music Lab",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  },
  { 
    title: "Mall Ambience", 
    artist: "Music Lab",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
  },
  { 
    title: "Easy Listening", 
    artist: "Music Lab",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
  },
]

export function InteractiveIphone() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(songs[0])
  const audioRef = useRef<HTMLAudioElement>(null)

  const handlePlayPause = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      const randomSong = songs[Math.floor(Math.random() * songs.length)]
      setCurrentSong(randomSong)
      
      audioRef.current.src = randomSong.url
      audioRef.current.volume = 0.5
      audioRef.current.play()
      
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => {
      setIsPlaying(false)
    }

    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("ended", handleEnded)
    }
  }, [])

  return (
    <div className="relative w-[234px] md:w-[281px] lg:w-[351px]">
      {/* Hidden Audio Element */}
      <audio ref={audioRef} />

      {/* iPhone Frame */}
      <div className="relative bg-black rounded-[40px] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10" />

        {/* Screen */}
        <div className="relative w-full bg-white rounded-[35px] overflow-hidden aspect-[9/19.5] flex flex-col items-center justify-center">
          {/* Screen Content */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
            {/* Tagline */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Music Lab</h2>
            <p className="text-xs text-gray-600 mb-12 font-medium">CREATE COLLABORATE ELEVATE</p>

            {/* Play Button */}
            <button
              onClick={handlePlayPause}
              className="relative w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center group hover:shadow-2xl transition-all hover:scale-105 mb-8"
            >
              {isPlaying ? (
                <Pause className="w-16 h-16 text-white group-hover:scale-110 transition-transform" fill="white" />
              ) : (
                <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform ml-2" fill="white" />
              )}
            </button>

            {/* Song Info */}
            <div className="text-center">
              <p className="text-gray-900 font-semibold text-sm">{currentSong.title}</p>
              <p className="text-gray-600 text-xs">{currentSong.artist}</p>
            </div>

            {/* Status Indicator */}
            <div className="mt-8 flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full transition-all ${isPlaying ? "bg-green-500" : "bg-gray-400"}`} />
              <p className="text-xs text-gray-600">
                {isPlaying ? "Now Playing" : "Ready to Play"}
              </p>
            </div>

            {/* Tagline Bottom */}
            <p className="absolute bottom-6 left-0 right-0 text-center text-xs text-gray-600">
              Your <span className="text-purple-600 font-semibold">music</span>. Your world.
            </p>
          </div>
        </div>
      </div>

      {/* Side Buttons */}
      <div className="absolute left-0 top-24 w-1 h-8 bg-black rounded-r" />
      <div className="absolute left-0 top-40 w-1 h-12 bg-black rounded-r" />
      <div className="absolute left-0 top-56 w-1 h-8 bg-black rounded-r" />
    </div>
  )
}
