"use client"

import { motion } from "framer-motion"

export default function BeeStrip() {
  const bees = [
    { emoji: "🐝", message: "Learn with Fun!" },
    { emoji: "🐝", message: "Buzz into Knowledge!" },
    { emoji: "🐝", message: "Sweet Learning!" },
    { emoji: "🐝", message: "Hive Mind!" },
    { emoji: "🐝", message: "Bee Creative!" },
  ]

  return (
    <section className="relative py-16 bg-gradient-to-r from-[#FFD93D] via-[#FF8AAE] to-[#C1F5C3] overflow-hidden">
      {/* Moving Bees */}
      <div className="relative">
        {bees.map((bee, index) => (
          <motion.div
            key={index}
            className="absolute flex items-center space-x-4"
            style={{ top: `${index * 60 + 20}px` }}
            initial={{ x: -200 }}
            animate={{ x: "100vw" }}
            transition={{
              duration: 15 + index * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: index * 3,
            }}
          >
            {/* Bee */}
            <motion.div
              className="text-6xl"
              animate={{
                rotate: [0, 10, -10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {bee.emoji}
            </motion.div>

            {/* Poster/Message */}
            <motion.div
              className="bg-white rounded-lg px-6 py-3 shadow-lg border-2 border-[#2B2B2B]"
              animate={{
                rotate: [0, 2, -2, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <p className="text-[#2B2B2B] font-bold text-lg whitespace-nowrap">{bee.message}</p>
            </motion.div>

            {/* Trail effect */}
            <motion.div
              className="w-8 h-1 bg-white/50 rounded-full"
              animate={{ scaleX: [1, 1.5, 1] }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        ))}
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
            }}
          >
            🌸
          </motion.div>
        ))}
      </div>

      {/* Central Message */}
      <div className="relative z-10 text-center py-8">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-[#2B2B2B] mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Join Our Buzzing Community!
        </motion.h2>
        <motion.p
          className="text-xl text-[#2B2B2B]/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Where every child learns, grows, and discovers their unique talents in our hive of creativity!
        </motion.p>
      </div>
    </section>
  )
}
