"use client"

import { motion } from "framer-motion"
import { Mail, Gift, Bell } from "lucide-react"

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#FFD93D] via-[#FF8AAE] to-[#C1F5C3] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-5xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
            }}
          >
            {["🐝", "📧", "🎁", "🔔"][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div
            className="mb-8"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Bell className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-semibold">Stay Updated!</span>
            </motion.div>

            <motion.h2
              className="text-5xl font-bold text-white mb-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Join Our Buzzing Newsletter!
            </motion.h2>

            <motion.p
              className="text-xl text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Get the latest updates, fun activities, and special offers delivered straight to your inbox!
            </motion.p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Gift, title: "Exclusive Offers", desc: "Special discounts just for subscribers" },
              { icon: Mail, title: "Weekly Updates", desc: "Latest news and activities" },
              { icon: Bell, title: "Event Alerts", desc: "Never miss important events" },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6"
                whileHover={{ scale: 1.05, y: -5 }}
                animate={{ y: [0, -3, 0] }}
                transition={{
                  y: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 },
                }}
              >
                <motion.div
                  className="text-4xl mb-3"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <benefit.icon className="w-8 h-8 text-white mx-auto" />
                </motion.div>
                <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-white/80 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            className="bg-white/20 backdrop-blur-sm rounded-3xl p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <motion.input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full border-2 border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:border-white focus:outline-none"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                type="submit"
                className="bg-white text-[#FF8AAE] px-8 py-4 rounded-full font-bold shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(255, 255, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe 🐝
              </motion.button>
            </form>

            <motion.p
              className="text-white/70 text-sm mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              No spam, just sweet updates! Unsubscribe anytime.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
