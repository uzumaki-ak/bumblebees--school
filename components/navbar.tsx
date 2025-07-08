"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Search, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Gallery", href: "#gallery" },
    { name: "Teachers", href: "#teachers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className="bg-gradient-to-r from-[#FFD93D] to-[#FF8AAE] shadow-lg sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-4xl"
            >
              🐝
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-[#2B2B2B]">Buzzy Hive</h1>
              <p className="text-sm text-[#2B2B2B]/70">Learning Academy</p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6 text-[#2B2B2B]">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">01635 635635</span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Buzzy Location</span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <div className="flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-[#2B2B2B] font-medium hover:text-[#FF8AAE] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="ml-4 p-2 text-[#2B2B2B] hover:text-[#FF8AAE] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Enroll Button */}
          <motion.button
            className="hidden lg:block bg-[#FF8AAE] text-white px-6 py-3 rounded-full font-semibold shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(255, 138, 174, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now!
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-[#2B2B2B]"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block py-2 px-4 text-[#2B2B2B] font-medium hover:bg-white/20 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              className="w-full mt-4 bg-[#FF8AAE] text-white py-3 rounded-full font-semibold"
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
