"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface PreloaderProps {
  onComplete: () => void
}

const quotes = [
  "Welcome to the Hive of Joy & Learning!",
  "Buzzing with Curiosity, One Child at a Time…",
  "Where Little Bees Learn Big Things 🐝",
  "Sweet as Honey, Bright as Sunshine!",
  "Every Bee Counts – Every Child Matters.",
]

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [currentQuote, setCurrentQuote] = useState(0)
  const [showHive, setShowHive] = useState(false)

  const [honeycombPositions, setHoneycombPositions] = useState<{ left: string; top: string }[]>([])
  const [floaters, setFloaters] = useState<
    { left: string; top: string; emoji: string; duration: number; delay: number }[]
  >([])

  useEffect(() => {
    const generatedHoneycombs = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }))
    setHoneycombPositions(generatedHoneycombs)

    const emojis = ["🌸", "🌼", "🌻", "🌺"]
    const generatedFloaters = [...Array(10)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
    setFloaters(generatedFloaters)
  }, [])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setShowHive(true)
          setTimeout(onComplete, 1000)
          return 100
        }
        return prev + 2
      })
    }, 80)

    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 3000)

    return () => {
      clearInterval(progressInterval)
      clearInterval(quoteInterval)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#FFD93D] via-[#B4E4FF] to-[#C1F5C3] flex items-center justify-center overflow-hidden">
      {/* Honeycomb Background */}
      <div className="absolute inset-0 opacity-20">
        {honeycombPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 border-2 border-[#2B2B2B]"
            style={{
              clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
              left: pos.left,
              top: pos.top,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          />
        ))}
      </div>

      {/* Flying Bee */}
      <motion.div
        className="absolute z-10"
        initial={{ x: -100, y: 50 }}
        animate={{
          x: showHive ? 400 : [100, 200, 300, 400, 500, 600],
          y: showHive ? 50 : [50, 30, 70, 40, 60, 50],
        }}
        transition={{
          duration: showHive ? 1 : 3,
          ease: "easeInOut",
          repeat: showHive ? 0 : Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <div className="relative">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.3, repeat: Number.POSITIVE_INFINITY }}
            className="text-6xl"
          >
            🐝
          </motion.div>
          <motion.div
            className="absolute -top-2 -right-2 w-4 h-1 bg-white rounded-full opacity-70"
            animate={{ scaleX: [1, 1.5, 1] }}
            transition={{ duration: 0.2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>

      {/* Hive Door */}
      <AnimatePresence>
        {showHive && (
          <motion.div
            className="absolute right-10 top-1/2 transform -translate-y-1/2"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            <div className="w-32 h-40 bg-[#FFD93D] rounded-t-full border-4 border-[#2B2B2B] relative">
              <div className="absolute inset-4 bg-[#2B2B2B] rounded-t-full"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-[#2B2B2B] rounded-t-lg"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="text-center z-20">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-[#2B2B2B] mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          🐝 Buzzy Hive
        </motion.h1>

        {/* Rotating Quotes */}
        <div className="h-16 mb-12">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuote}
              className="text-2xl md:text-3xl font-semibold text-[#2B2B2B] px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {quotes[currentQuote]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Loading Progress */}
        <div className="w-80 mx-auto">
          <div className="bg-white/30 rounded-full h-4 mb-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF8AAE] to-[#FFD93D] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <motion.div
            className="text-3xl font-bold text-[#2B2B2B]"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
          >
            {progress}%
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      {floaters.map((floater, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl"
          style={{
            left: floater.left,
            top: floater.top,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: floater.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: floater.delay,
          }}
        >
          {floater.emoji}
        </motion.div>
      ))}
    </div>
  )
}
