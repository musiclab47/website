"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function YouTubeSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const section = document.getElementById("youtube-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  // Latest videos from Music Lab 47 channel
  const videos = [
    {
      id: "HgedMX-HyjI",
      title: "Latest Release",
    },
    {
      id: "rzu6CBFSDvQ",
      title: "Music Video",
    },
    {
      id: "YP-Jhr1TPWM",
      title: "Behind the Scenes",
    },
    {
      id: "FrCVwbAMwWE",
      title: "Artist Interview",
    },
  ]

  return (
    <section id="youtube-section" className="py-32 px-6 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-4 font-serif">Latest from YouTube</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Check out our latest music videos, behind-the-scenes content, and artist features on our YouTube channel.
          </p>
        </motion.div>

 

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-zinc-900 aspect-video"
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
