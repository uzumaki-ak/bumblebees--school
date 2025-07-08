"use client"

import { motion } from "framer-motion"
import { Palette, Music, BookOpen, Gamepad2, Camera, Puzzle } from "lucide-react"

const activities = [
  {
    id: 1,
    title: "Art & Craft",
    description: "Creative expression through colors and imagination",
    icon: Palette,
    color: "from-pink-400 to-rose-500",
    emoji: "🎨",
    bgColor: "bg-pink-100",
  },
  {
    id: 2,
    title: "Music & Dance",
    description: "Rhythm and movement for joyful learning",
    icon: Music,
    color: "from-purple-400 to-indigo-500",
    emoji: "🎵",
    bgColor: "bg-purple-100",
  },
  {
    id: 3,
    title: "Story Time",
    description: "Adventures through magical tales and books",
    icon: BookOpen,
    color: "from-blue-400 to-cyan-500",
    emoji: "📚",
    bgColor: "bg-blue-100",
  },
  {
    id: 4,
    title: "Fun Games",
    description: "Learning through play and interactive activities",
    icon: Gamepad2,
    color: "from-green-400 to-emerald-500",
    emoji: "🎮",
    bgColor: "bg-green-100",
  },
  {
    id: 5,
    title: "Photography",
    description: "Capturing beautiful moments and memories",
    icon: Camera,
    color: "from-yellow-400 to-orange-500",
    emoji: "📸",
    bgColor: "bg-yellow-100",
  },
  {
    id: 6,
    title: "Puzzle Solving",
    description: "Building problem-solving skills with fun puzzles",
    icon: Puzzle,
    color: "from-teal-400 to-cyan-500",
    emoji: "🧩",
    bgColor: "bg-teal-100",
  },
]

export default function ActivitiesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF7E9] to-[#C1F5C3] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
            }}
          >
            {["🐝", "🌸", "🎨", "🎵", "📚", "🎮"][Math.floor(Math.random() * 6)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center mb-6"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.span
              className="text-6xl mr-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              🎪
            </motion.span>
            <h2 className="text-5xl font-bold text-[#2B2B2B]">Fun Activities</h2>
          </motion.div>
          <motion.p
            className="text-xl text-[#2B2B2B]/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Discover amazing activities that make learning an adventure! Every day is filled with joy, creativity, and
            discovery.
          </motion.p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className={`${activity.bgColor} rounded-3xl p-8 h-80 relative overflow-hidden cursor-pointer shadow-lg`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-4xl"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 6 + Math.random() * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: Math.random() * 2,
                      }}
                    >
                      {activity.emoji}
                    </motion.div>
                  ))}
                </div>

                {/* Main Icon */}
                <motion.div
                  className="text-center mb-6"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.2,
                  }}
                >
                  <motion.div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${activity.color} rounded-full mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <activity.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <motion.div
                    className="text-6xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.3,
                    }}
                  >
                    {activity.emoji}
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="text-center relative z-10">
                  <motion.h3
                    className="text-2xl font-bold text-[#2B2B2B] mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {activity.title}
                  </motion.h3>

                  <motion.p
                    className="text-[#2B2B2B]/70 text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {activity.description}
                  </motion.p>
                </div>

                {/* Floating Elements */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl opacity-30"
                    style={{
                      left: `${20 + i * 30}%`,
                      bottom: `${10 + i * 5}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 20, -20, 0],
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.3,
                    }}
                  >
                    ✨
                  </motion.div>
                ))}

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#FF8AAE] to-[#FFD93D] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(255, 138, 174, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              y: { duration: 2, repeat: Number.POSITIVE_INFINITY },
            }}
          >
            <motion.span
              className="mr-3 text-2xl"
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              🎉
            </motion.span>
            Join the Fun Today!
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
