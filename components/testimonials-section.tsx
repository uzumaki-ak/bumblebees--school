"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Emma Johnson",
    role: "Parent of Lily (Age 4)",
    content:
      "Buzzy Hive has transformed my daughter's love for learning! She comes home every day excited to share what she discovered. The teachers are absolutely magical!",
    rating: 5,
    avatar: "👩",
    color: "from-pink-400 to-rose-500",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Parent of Alex (Age 5)",
    content:
      "The creativity and care at Buzzy Hive is unmatched. My son has developed confidence, social skills, and a genuine curiosity about the world around him.",
    rating: 5,
    avatar: "👨",
    color: "from-blue-400 to-indigo-500",
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Parent of Twins (Age 3)",
    content:
      "Both my children absolutely love going to school now! The bee theme makes everything so fun and engaging. It's like a magical wonderland for kids!",
    rating: 5,
    avatar: "👩‍🦰",
    color: "from-green-400 to-emerald-500",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#C1F5C3] to-[#B4E4FF] relative overflow-hidden">
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
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
            }}
          >
            {["🐝", "💬", "⭐", "💖"][Math.floor(Math.random() * 4)]}
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
              💬
            </motion.span>
            <h2 className="text-5xl font-bold text-[#2B2B2B]">What Parents Say</h2>
          </motion.div>
          <motion.p
            className="text-xl text-[#2B2B2B]/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Hear from our amazing parent community about their children's journey at Buzzy Hive!
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 relative overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Quote Icon */}
                <motion.div
                  className="absolute top-4 right-4 text-4xl opacity-20"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Quote className="w-8 h-8 text-[#FF8AAE]" />
                </motion.div>

                {/* Avatar */}
                <motion.div
                  className="text-center mb-6"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.3,
                  }}
                >
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${testimonial.color} rounded-full mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-2xl">{testimonial.avatar}</span>
                  </motion.div>
                </motion.div>

                {/* Rating */}
                <motion.div
                  className="flex justify-center mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, type: "spring" }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current mx-1" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Content */}
                <motion.p
                  className="text-[#2B2B2B]/80 text-center mb-6 leading-relaxed italic"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  "{testimonial.content}"
                </motion.p>

                {/* Author */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-[#2B2B2B] text-lg">{testimonial.name}</h4>
                  <p className="text-[#2B2B2B]/60 text-sm">{testimonial.role}</p>
                </motion.div>

                {/* Floating Hearts */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-xl opacity-20"
                    style={{
                      left: `${20 + i * 30}%`,
                      bottom: `${10 + i * 5}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.3,
                    }}
                  >
                    💖
                  </motion.div>
                ))}

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#FFD93D]/20 to-[#FF8AAE]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
              🐝
            </motion.span>
            Share Your Experience!
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
