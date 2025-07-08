"use client"

import { motion } from "framer-motion"
import { Users, GraduationCap, School, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "180+",
    label: "STUDENTS",
    color: "text-blue-600",
  },
  {
    icon: GraduationCap,
    number: "44",
    label: "TEACHERS",
    color: "text-green-600",
  },
  {
    icon: School,
    number: "11",
    label: "CLASSROOMS",
    color: "text-purple-600",
  },
  {
    icon: Award,
    number: "314",
    label: "GRADUATES",
    color: "text-orange-600",
  },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#C1F5C3] to-[#B4E4FF] relative overflow-hidden">
      {/* Grass Background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-400 to-green-300">
        {/* Grass blades */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-1 bg-green-500 rounded-t-full"
            style={{
              left: `${i * 2}%`,
              height: `${20 + Math.random() * 20}px`,
            }}
            animate={{
              rotate: [0, 2, -2, 0],
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

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-20"
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
            {["🐝", "🌸", "🌼", "⭐"][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Icon Container */}
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl mb-6 border-2 border-dashed border-gray-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  y: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 },
                  rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 },
                }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </motion.div>

              {/* Number */}
              <motion.div
                className="text-5xl lg:text-6xl font-bold text-[#2B2B2B] mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: index * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                {stat.number}
              </motion.div>

              {/* Label */}
              <motion.p
                className="text-lg font-semibold text-[#2B2B2B]/80 tracking-wider"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.p>

              {/* Decorative Elements */}
              <motion.div
                className="mt-4 flex justify-center space-x-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 + 0.7, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-[#FFD93D] rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-bold text-[#2B2B2B] mb-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Growing Together in Our Buzzy Community! 🐝
          </motion.h3>
          <p className="text-lg text-[#2B2B2B]/70 max-w-2xl mx-auto">
            Every number tells a story of growth, learning, and the sweet success of our little bees!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
