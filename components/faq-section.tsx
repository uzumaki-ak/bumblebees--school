"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "How much money can I earn per task?",
    answer:
      "Our little bees can earn sweet rewards through various learning activities! Each completed task brings joy and knowledge, which are the most valuable treasures in our hive.",
    character: "💰",
  },
  {
    id: 2,
    question: "How do I track my progress toward a goal?",
    answer:
      "We have a special progress tracker that shows your learning journey! Like a bee collecting nectar, you can see how much knowledge you've gathered on your way to becoming a super learner!",
    character: "📊",
  },
  {
    id: 3,
    question: "How quickly can I receive my reward?",
    answer:
      "You'll receive your coins instantly and can track your earnings anytime in the Wallet. Just like how bees work together in perfect harmony!",
    character: "🎁",
  },
  {
    id: 4,
    question: "How many tasks can I complete?",
    answer:
      "There's no limit to learning in our hive! Complete as many tasks as you want and watch your knowledge grow like beautiful flowers in a garden.",
    character: "✅",
  },
  {
    id: 5,
    question: "Can I set more than one goal at a time?",
    answer:
      "Just like bees can visit many flowers, you can work toward multiple learning goals simultaneously. Our system helps you organize and track all your adventures!",
    character: "🎯",
  },
  {
    id: 6,
    question: "What kinds of tasks are available?",
    answer:
      "We have a buzzing variety of activities! From creative arts and storytelling to problem-solving games and nature exploration - there's something for every curious little mind!",
    character: "🌈",
  },
]

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF7E9] to-[#C1F5C3] relative overflow-hidden">
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
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
            }}
          >
            {["🐝", "🌸", "❓", "💡"][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
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
            <span className="text-6xl mr-4">🤔</span>
            <h2 className="text-5xl font-bold text-[#2B2B2B]">Frequently Asked Questions</h2>
          </motion.div>
          <p className="text-xl text-[#2B2B2B]/70 max-w-2xl mx-auto">
            Got questions? Our friendly bees have answers! Explore the most common questions from our buzzing community.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-[#FFD93D]/20 transition-colors"
                onClick={() => toggleFAQ(faq.id)}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-[#2B2B2B] pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openFAQ === faq.id ? (
                    <Minus className="w-6 h-6 text-[#FF8AAE]" />
                  ) : (
                    <Plus className="w-6 h-6 text-[#FF8AAE]" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="flex items-start space-x-4 bg-gradient-to-r from-[#B4E4FF]/30 to-[#C1F5C3]/30 rounded-xl p-4">
                        {/* Animated Character */}
                        <motion.div
                          className="text-4xl flex-shrink-0"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 180 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <motion.span
                            animate={{
                              rotate: [0, 10, -10, 0],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          >
                            {faq.character}
                          </motion.span>
                        </motion.div>

                        <motion.p
                          className="text-[#2B2B2B]/80 leading-relaxed"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-[#FF8AAE] to-[#FFD93D] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(255, 138, 174, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="mr-3 text-2xl"
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              🐝
            </motion.span>
            Still have questions? Buzz us!
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
