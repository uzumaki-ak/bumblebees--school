"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#FFF7E9] via-[#B4E4FF] to-[#C1F5C3] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Bees */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`bee-${i}`}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 50, -30, 20, 0],
              y: [0, -30, 20, -10, 0],
              rotate: [0, 10, -10, 5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          >
            🐝
          </motion.div>
        ))}

        {/* Floating Flowers */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`flower-${i}`}
            className="absolute text-5xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          >
            {["🌸", "🌼", "🌻", "🌺", "🌷", "🌹"][Math.floor(Math.random() * 6)]}
          </motion.div>
        ))}

        {/* Sparkles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Welcome Badge */}
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-[#FFD93D] to-[#FF8AAE] px-6 py-3 rounded-full mb-6 shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <motion.div
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Star className="w-5 h-5 text-white mr-2" />
              </motion.div>
              <span className="text-white font-bold text-lg">Welcome to Our Magical Hive!</span>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="ml-2"
              >
                ✨
              </motion.div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-5xl lg:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.span
                className="text-[#FF8AAE] relative inline-block"
                whileHover={{ scale: 1.05 }}
                animate={{ rotate: [0, 1, -1, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                Dress
                <motion.div
                  className="absolute -top-6 -right-6 text-4xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  👗
                </motion.div>
              </motion.span>{" "}
              <span className="text-[#2B2B2B]">Your</span>{" "}
              <motion.span
                className="text-[#FFD93D] relative inline-block"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Little
                <motion.div
                  className="absolute -top-4 -right-4 text-3xl"
                  animate={{
                    rotate: [0, 20, -20, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  🌟
                </motion.div>
              </motion.span>
              <br />
              <motion.span className="text-[#2B2B2B] relative inline-block" whileHover={{ scale: 1.02 }}>
                Ones in
                <motion.div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  ☀️
                </motion.div>
              </motion.span>{" "}
              <motion.span
                className="bg-gradient-to-r from-[#FFD93D] via-[#FF8AAE] to-[#C1F5C3] bg-clip-text text-transparent relative"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                Colorful
                <motion.div
                  className="absolute -bottom-4 left-0 w-full h-3 bg-gradient-to-r from-[#FFD93D] to-[#FF8AAE] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </motion.span>
              <br />
              <motion.span
                className="text-[#2B2B2B] relative inline-block"
                whileHover={{ scale: 1.05 }}
                animate={{ rotate: [0, 0.5, -0.5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                Confidence!
                <motion.div
                  className="absolute -right-8 top-0 text-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  💖
                </motion.div>
              </motion.span>
            </motion.h1>

            {/* Stats Badge */}
            <motion.div
              className="flex items-center justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.div
                className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl border-2 border-[#FFD93D]"
                whileHover={{ scale: 1.05, y: -5 }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="flex -space-x-3 mr-6">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-r from-[#FF8AAE] to-[#FFD93D] rounded-full border-3 border-white flex items-center justify-center text-white font-bold"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {["👶", "👧", "👦", "👨‍👩‍👧‍👦"][i]}
                    </motion.div>
                  ))}
                </div>
                <div>
                  <motion.p
                    className="text-2xl font-bold text-[#2B2B2B]"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    952+
                    <motion.span
                      className="inline-block ml-1"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    >
                      🎉
                    </motion.span>
                  </motion.p>
                  <p className="text-[#2B2B2B]/70 font-semibold">Happy Families!</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-xl text-[#2B2B2B]/80 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Where every piece of clothing sparks imagination, allowing your precious little ones to express their
              unique personalities!
              <motion.span
                className="inline-block ml-2"
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                🌈
              </motion.span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.button
                className="group bg-gradient-to-r from-[#FF8AAE] to-[#FFD93D] text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl flex items-center justify-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 138, 174, 0.4)",
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 10px 25px rgba(255, 138, 174, 0.3)",
                    "0 15px 35px rgba(255, 138, 174, 0.4)",
                    "0 10px 25px rgba(255, 138, 174, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="mr-3 text-2xl"
                >
                  🛍️
                </motion.span>
                Shop Now
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </motion.button>

              <motion.button
                className="group bg-white/90 backdrop-blur-sm text-[#2B2B2B] px-10 py-5 rounded-full font-bold text-xl shadow-xl border-2 border-[#FFD93D] flex items-center justify-center"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#FFD93D",
                  color: "#2B2B2B",
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="mr-3 text-2xl"
                >
                  📖
                </motion.span>
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Character */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              {/* Main Character Circle */}
              <motion.div
                className="w-96 h-96 mx-auto bg-gradient-to-br from-[#FFD93D] via-[#FF8AAE] to-[#C1F5C3] rounded-full flex items-center justify-center relative overflow-hidden shadow-2xl"
                animate={{
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Main Bee Character */}
                <motion.div
                  className="text-9xl relative z-10"
                  animate={{
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  🐝
                </motion.div>

                {/* Crown */}
                <motion.div
                  className="absolute top-8 left-1/2 transform -translate-x-1/2 text-5xl"
                  animate={{
                    rotate: [0, -5, 5, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  👑
                </motion.div>

                {/* Magic Wand */}
                <motion.div
                  className="absolute bottom-16 right-16 text-4xl"
                  animate={{
                    rotate: [0, 20, -20, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  🪄
                </motion.div>

                {/* Floating Hearts */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`heart-${i}`}
                    className="absolute text-3xl"
                    style={{
                      left: `${20 + Math.cos((i * 60 * Math.PI) / 180) * 140}px`,
                      top: `${20 + Math.sin((i * 60 * Math.PI) / 180) * 140}px`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.4,
                    }}
                  >
                    {["💖", "🌟", "🎈", "🦋", "🌈", "✨"][i]}
                  </motion.div>
                ))}

                {/* Inner Glow Effect */}
                <motion.div
                  className="absolute inset-4 bg-gradient-to-br from-white/30 to-transparent rounded-full"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
            </motion.div>

            {/* Background Decoration Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`ring-${i}`}
                className="absolute inset-0 rounded-full border-4 border-dashed opacity-20"
                style={{
                  borderColor: ["#FFD93D", "#FF8AAE", "#C1F5C3"][i],
                  scale: 1 + i * 0.15,
                }}
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}

            {/* Background Glow */}
            <motion.div
              className="absolute inset-0 -z-10"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, duration: 1.5 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#C1F5C3]/40 to-[#B4E4FF]/40 rounded-full blur-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20">
          <motion.path
            d="M0,60 Q300,120 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD93D" />
              <stop offset="50%" stopColor="#FF8AAE" />
              <stop offset="100%" stopColor="#C1F5C3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
