"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Youtube, Music } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  "Contact Us": [
    { name: "Schools", href: "/schools" },
    { name: "Little Sunshine's Development", href: "/development" },
  ],
  FAQs: [
    { name: "Team Store", href: "/store" },
    { name: "Transparency in Coverage", href: "/coverage" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", color: "text-blue-600" },
  { icon: Instagram, href: "#", color: "text-pink-600" },
  { icon: Linkedin, href: "#", color: "text-blue-700" },
  { icon: Youtube, href: "#", color: "text-red-600" },
  { icon: Music, href: "#", color: "text-purple-600" },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#C1F5C3] to-[#B4E4FF] relative overflow-hidden">
      {/* Decorative Flowers */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 text-6xl"
            style={{
              left: `${i * 12.5}%`,
              transform: "translateX(-50%)",
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
          >
            {["🌸", "🌼", "🌻", "🌺", "🌷", "🌹", "🌿", "🍀"][i]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Logo Section */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div className="flex items-center justify-center lg:justify-start mb-6" whileHover={{ scale: 1.05 }}>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="text-5xl mr-4"
              >
                🐝
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold text-[#FF8AAE]">little sunshine's</h3>
                <h4 className="text-4xl font-bold text-[#22c55e]">BUZZY HIVE</h4>
                <p className="text-sm text-[#2B2B2B]/70 font-medium">A LEARNING ACADEMY PRESCHOOL</p>
              </div>
            </motion.div>

            <motion.p
              className="text-[#2B2B2B]/70 mb-6 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Copyright 2025 Little Sunshine's Buzzy Hive
            </motion.p>

            <motion.div
              className="flex space-x-2 text-sm text-[#2B2B2B]/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link href="/privacy" className="hover:text-[#FF8AAE] transition-colors underline">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-[#FF8AAE] transition-colors underline">
                Terms & Conditions
              </Link>
            </motion.div>
          </motion.div>

          {/* Links Section */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <div key={category}>
                <motion.h5
                  className="font-bold text-[#2B2B2B] mb-4 text-lg underline"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: categoryIndex * 0.1 + 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {category}
                </motion.h5>
                <ul className="space-y-2">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: categoryIndex * 0.1 + linkIndex * 0.1 + 0.7,
                        duration: 0.6,
                      }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={link.href}
                        className="text-[#2B2B2B]/70 hover:text-[#FF8AAE] transition-colors underline"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            className="text-center lg:text-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h5
              className="font-bold text-[#2B2B2B] mb-6 text-lg"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Follow Our Buzzing Community!
            </motion.h5>

            <div className="flex justify-center lg:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-3 bg-white/80 backdrop-blur-sm rounded-full ${social.color} hover:bg-white transition-all duration-300 shadow-lg`}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>

            {/* Floating Bee */}
            <motion.div
              className="mt-8 text-4xl"
              animate={{
                x: [0, 20, -20, 0],
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              🐝
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-12 pt-8 border-t border-[#2B2B2B]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-[#2B2B2B]/70 text-lg"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            🌟 Where Every Little Bee Learns to Shine! 🌟
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
