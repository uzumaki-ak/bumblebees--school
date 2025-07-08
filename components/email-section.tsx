"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"

export default function EmailSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#B4E4FF] to-[#FFF7E9] relative overflow-hidden">
      {/* Grass Background */}
      <div className="absolute bottom-0 left-0 right-0 h-40">
        <svg viewBox="0 0 1200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
          <path d="M0,200 L0,100 Q300,80 600,100 T1200,100 L1200,200 Z" fill="url(#grassGradient)" />
        </svg>

        {/* Grass blades */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-1 bg-green-500 rounded-t-full"
            style={{
              left: `${i * 3.33}%`,
              height: `${15 + Math.random() * 25}px`,
            }}
            animate={{
              rotate: [0, 3, -3, 0],
              scaleY: [1, 1.1, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 70}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          >
            {["🐝", "🌸", "📧", "✨"][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center mb-6"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Mail className="w-8 h-8 text-[#FF8AAE] mr-3" />
              <span className="text-lg font-semibold text-[#2B2B2B]">Get Connected</span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-6xl font-bold text-[#2B2B2B] mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Education That <span className="text-[#FF8AAE]">Sparks</span> Imagination
            </motion.h2>

            <motion.h3
              className="text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Nurturing Curiosity & Inspiring Growth
            </motion.h3>

            {/* Email Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-full border-2 border-[#FFD93D] focus:border-[#FF8AAE] focus:outline-none text-[#2B2B2B] placeholder-[#2B2B2B]/50"
                whileFocus={{ scale: 1.02 }}
                disabled={isSubmitted}
              />
              <motion.button
                type="submit"
                className={`px-8 py-4 rounded-full font-semibold text-white flex items-center justify-center ${
                  isSubmitted ? "bg-green-500" : "bg-gradient-to-r from-[#FF8AAE] to-[#FFD93D]"
                }`}
                whileHover={{ scale: isSubmitted ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitted ? 1 : 0.95 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center">
                    ✅ Submitted!
                  </motion.span>
                ) : (
                  <>
                    Submit
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Right Content - Character */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              {/* Character */}
              <div className="relative">
                {/* Orange Circle Background */}
                <motion.div
                  className="w-80 h-80 bg-gradient-to-br from-[#FFD93D] to-[#FF8AAE] rounded-full mx-auto relative overflow-hidden"
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  {/* Child Character */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-8xl"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    👦
                  </motion.div>

                  {/* Book */}
                  <motion.div
                    className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-4xl"
                    animate={{
                      rotate: [0, -10, 10, 0],
                      y: [0, -5, 0],
                    }}
                    transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    📚
                  </motion.div>
                </motion.div>

                {/* Floating Elements */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-3xl"
                    style={{
                      left: `${20 + Math.cos((i * 45 * Math.PI) / 180) * 150}px`,
                      top: `${20 + Math.sin((i * 45 * Math.PI) / 180) * 150}px`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2 + i * 0.2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.3,
                    }}
                  >
                    {["🌟", "📖", "✏️", "🎨", "🔬", "🎵", "🌈", "💡"][i]}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Background Decoration */}
            <motion.div
              className="absolute inset-0 -z-10"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#C1F5C3]/30 to-[#B4E4FF]/30 rounded-full blur-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
