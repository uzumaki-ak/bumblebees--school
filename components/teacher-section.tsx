"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"

const teachers = [
  {
    id: 1,
    name: "Creative Sculpting",
    age: "3-5 years",
    icon: "🎨",
    color: "bg-green-400",
    description: "Hands-on sculpting activities that develop fine motor skills and creativity",
  },
  {
    id: 2,
    name: "Creative Visual Arts",
    age: "4-6 years",
    icon: "🖼️",
    color: "bg-purple-400",
    description: "Explore colors, shapes, and artistic expression through various mediums",
  },
  {
    id: 3,
    name: "Creative Writing",
    age: "6 years+",
    icon: "✍️",
    color: "bg-lime-400",
    description: "Develop storytelling skills and imagination through creative writing exercises",
  },
]

export default function TeacherSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#C1F5C3] to-[#FFF7E9] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
            }}
          >
            {["🐝", "🌸", "🎨", "📚"][Math.floor(Math.random() * 4)]}
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
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="bg-green-200 rounded-full p-4 mr-4">
              <Star className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-5xl font-bold text-[#2B2B2B]">Creative</h2>
          </motion.div>

          <motion.h3
            className="text-6xl font-bold text-[#2B2B2B] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Kids Academy
          </motion.h3>

          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-purple-200 rounded-full p-3 mr-4">
              <span className="text-2xl">👩‍🏫</span>
            </div>
            <p className="text-lg text-[#2B2B2B]/80 max-w-2xl">
              Creative Kids Academy provides a nurturing environment where young minds can flourish and explore their
              artistic talents.
            </p>
          </motion.div>

          {/* Floating Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {["#Drawing", "#Writing", "#Artwork"].map((tag, index) => (
              <motion.span
                key={tag}
                className="bg-gradient-to-r from-[#FF8AAE] to-[#FFD93D] text-white px-4 py-2 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{
                  rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 },
                  hover: { type: "spring", stiffness: 300 },
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((program, index) => (
            <motion.div
              key={program.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className={`${program.color} rounded-3xl p-8 h-80 relative overflow-hidden cursor-pointer`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Age Badge */}
                <motion.div
                  className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm font-semibold text-[#2B2B2B]">{program.age}</span>
                </motion.div>

                {/* Arrow Button */}
                <motion.button
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowRight className="w-5 h-5 text-[#2B2B2B]" />
                </motion.button>

                {/* Icon */}
                <motion.div
                  className="text-8xl mb-4 text-center"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                >
                  {program.icon}
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <motion.h3
                    className="text-2xl font-bold text-white mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {program.name}
                  </motion.h3>

                  <motion.p
                    className="text-white/90 text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {program.description}
                  </motion.p>
                </div>

                {/* Decorative Elements */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl text-white/30"
                    style={{
                      left: `${20 + i * 30}%`,
                      bottom: `${10 + i * 5}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, -10, 0],
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
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
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
          >
            Enroll Your Little Bee Today! 🐝
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
