"use client"

import { motion } from "framer-motion"
import { Star, Heart, Award, BookOpen } from "lucide-react"

const teachers = [
  {
    id: 1,
    name: "Miss Sarah Bee",
    role: "Creative Arts Teacher",
    experience: "5 years",
    specialty: "Painting & Crafts",
    avatar: "👩‍🎨",
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-100",
    rating: 4.9,
    students: 45,
    quote: "Every child is an artist waiting to bloom!",
  },
  {
    id: 2,
    name: "Mr. Buzz Johnson",
    role: "Music & Movement",
    experience: "7 years",
    specialty: "Songs & Dance",
    avatar: "👨‍🎵",
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-100",
    rating: 4.8,
    students: 52,
    quote: "Music makes learning magical and memorable!",
  },
  {
    id: 3,
    name: "Miss Honey Smith",
    role: "Story Time Leader",
    experience: "6 years",
    specialty: "Reading & Tales",
    avatar: "👩‍📚",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-100",
    rating: 5.0,
    students: 38,
    quote: "Stories open doors to infinite possibilities!",
  },
  {
    id: 4,
    name: "Mr. Pollen Davis",
    role: "Science Explorer",
    experience: "4 years",
    specialty: "Nature & Discovery",
    avatar: "👨‍🔬",
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-100",
    rating: 4.7,
    students: 41,
    quote: "Wonder is the beginning of all learning!",
  },
  {
    id: 5,
    name: "Miss Blossom Lee",
    role: "Language Arts",
    experience: "8 years",
    specialty: "Writing & Communication",
    avatar: "👩‍💼",
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-100",
    rating: 4.9,
    students: 47,
    quote: "Words are the wings of imagination!",
  },
  {
    id: 6,
    name: "Mr. Nectar Wilson",
    role: "Physical Education",
    experience: "5 years",
    specialty: "Sports & Fitness",
    avatar: "👨‍⚽",
    color: "from-teal-400 to-cyan-500",
    bgColor: "bg-teal-100",
    rating: 4.8,
    students: 55,
    quote: "A healthy body nurtures a healthy mind!",
  },
]

export default function TeacherShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#B4E4FF] to-[#FFF7E9] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
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
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          >
            {["🐝", "👩‍🏫", "👨‍🏫", "📚", "🎨", "🎵"][Math.floor(Math.random() * 6)]}
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
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              👩‍🏫
            </motion.span>
            <h2 className="text-5xl font-bold text-[#2B2B2B]">Meet Our Amazing Teachers</h2>
            <motion.span
              className="text-6xl ml-4"
              animate={{ rotate: [0, -15, 15, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              👨‍🏫
            </motion.span>
          </motion.div>
          <motion.p
            className="text-xl text-[#2B2B2B]/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our dedicated team of passionate educators brings magic to learning every single day! Each teacher is
            specially trained to nurture young minds with love and creativity.
          </motion.p>
        </motion.div>

        {/* Teachers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className={`${teacher.bgColor} rounded-3xl p-8 relative overflow-hidden cursor-pointer shadow-xl`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-6xl"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 8 + Math.random() * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: Math.random() * 2,
                      }}
                    >
                      {teacher.avatar}
                    </motion.div>
                  ))}
                </div>

                {/* Teacher Avatar */}
                <motion.div
                  className="text-center mb-6"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.2,
                  }}
                >
                  <motion.div
                    className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${teacher.color} rounded-full mb-4 shadow-lg relative`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{
                      boxShadow: [
                        "0 10px 25px rgba(0,0,0,0.1)",
                        "0 15px 35px rgba(0,0,0,0.15)",
                        "0 10px 25px rgba(0,0,0,0.1)",
                      ],
                    }}
                    transition={{
                      boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                    }}
                  >
                    <motion.div
                      className="text-4xl"
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      {teacher.avatar}
                    </motion.div>

                    {/* Floating Crown */}
                    <motion.div
                      className="absolute -top-3 -right-2 text-2xl"
                      animate={{
                        rotate: [0, 15, -15, 0],
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      👑
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Teacher Info */}
                <div className="text-center relative z-10">
                  <motion.h3
                    className="text-2xl font-bold text-[#2B2B2B] mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {teacher.name}
                  </motion.h3>

                  <motion.p
                    className="text-[#2B2B2B]/80 font-semibold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {teacher.role}
                  </motion.p>

                  <motion.div
                    className="flex items-center justify-center space-x-4 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                      <span className="text-sm font-semibold">{teacher.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 text-red-500 mr-1" />
                      <span className="text-sm">{teacher.students}</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white/50 rounded-lg p-3 mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm text-[#2B2B2B]/70 italic">"{teacher.quote}"</p>
                  </motion.div>

                  <motion.div
                    className="flex items-center justify-between text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-[#FFD93D] mr-1" />
                      <span className="text-[#2B2B2B]/70">{teacher.experience}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 text-[#FF8AAE] mr-1" />
                      <span className="text-[#2B2B2B]/70">{teacher.specialty}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Floating Elements */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-xl opacity-20"
                    style={{
                      left: `${15 + i * 25}%`,
                      bottom: `${5 + i * 3}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 15, -15, 0],
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                  >
                    {["✨", "🌟", "💫", "⭐"][i]}
                  </motion.div>
                ))}

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
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
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-[#FF8AAE] to-[#FFD93D] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(255, 138, 174, 0.4)",
            }}
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
            Join Our Teaching Family!
            <motion.span
              className="ml-3 text-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              💖
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
