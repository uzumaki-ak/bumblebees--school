"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Star, Plus } from "lucide-react"

const categories = [
  "All Categories",
  "Tops",
  "Bottoms",
  "Dress",
  "Pajamas",
  "Outwears",
  "Swimwears",
  "Shoes",
  "Accessories",
]

const products = [
  {
    id: 1,
    name: "Kid Embroidered Teddy-Fleece Jacket",
    category: "Outwears",
    price: 34.5,
    originalPrice: 42.56,
    rating: 4.4,
    image: "🧥",
    color: "bg-pink-200",
  },
  {
    id: 2,
    name: "Kid Enjoy The Ride Blue Crewneck",
    category: "Tops",
    price: 25.75,
    rating: 4.2,
    image: "👕",
    color: "bg-blue-200",
  },
  {
    id: 3,
    name: "Sunny Day Yellow Dress",
    category: "Dress",
    price: 28.99,
    rating: 4.6,
    image: "👗",
    color: "bg-yellow-200",
  },
  {
    id: 4,
    name: "Cozy Bee Pajama Set",
    category: "Pajamas",
    price: 22.5,
    rating: 4.8,
    image: "👔",
    color: "bg-green-200",
  },
  {
    id: 5,
    name: "Rainbow Sneakers",
    category: "Shoes",
    price: 35.99,
    rating: 4.3,
    image: "👟",
    color: "bg-purple-200",
  },
  {
    id: 6,
    name: "Flower Crown Accessory",
    category: "Accessories",
    price: 15.99,
    rating: 4.7,
    image: "👑",
    color: "bg-pink-300",
  },
]

export default function ChildGallery() {
  const [activeCategory, setActiveCategory] = useState("All Categories")
  const [favorites, setFavorites] = useState<number[]>([])

  const filteredProducts =
    activeCategory === "All Categories" ? products : products.filter((product) => product.category === activeCategory)

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF7E9] to-[#B4E4FF]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center mb-4"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <span className="text-6xl mr-4">🐝</span>
            <h2 className="text-5xl font-bold">
              <span className="text-[#FF8AAE]">Collections</span> <span className="text-[#2B2B2B]">that</span>{" "}
              <span className="text-[#FFD93D]">Speak to Every Style</span>
            </h2>
          </motion.div>
          <p className="text-xl text-[#2B2B2B]/70 max-w-2xl mx-auto">
            Bright Styles for Bright Futures, Tailored to Embrace Your Little One's Personality
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#FF8AAE] text-white shadow-lg"
                  : "bg-white/80 text-[#2B2B2B] hover:bg-[#FFD93D] hover:text-[#2B2B2B]"
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Promotional Banner */}
        <motion.div
          className="bg-gradient-to-r from-[#FF8AAE] to-[#FFD93D] rounded-3xl p-8 mb-12 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h3
                className="text-4xl font-bold text-white mb-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Enjoy 20% Off Your First Purchase at Buzzy Hive!
              </motion.h3>
              <motion.button
                className="bg-white text-[#FF8AAE] px-6 py-3 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Claim Now
              </motion.button>
            </div>
            <motion.div
              className="text-8xl text-center"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              🐝
            </motion.div>
          </div>

          {/* Background decorations */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl text-white/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 6 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            >
              🌸
            </motion.div>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                layout
              >
                <div className={`${product.color} h-64 flex items-center justify-center relative`}>
                  <motion.div
                    className="text-8xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {product.image}
                  </motion.div>

                  {/* Favorite Button */}
                  <motion.button
                    className="absolute top-4 right-4 p-2 bg-white/80 rounded-full"
                    onClick={() => toggleFavorite(product.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.includes(product.id) ? "text-red-500 fill-current" : "text-gray-400"
                      }`}
                    />
                  </motion.button>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-[#2B2B2B]">{product.category}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-[#2B2B2B] mb-3 text-lg">{product.name}</h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-[#2B2B2B]">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>

                    <motion.button
                      className="bg-[#FF8AAE] text-white p-2 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Plus className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Explore More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-[#FFD93D] text-[#2B2B2B] px-8 py-4 rounded-full font-bold text-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(255, 217, 61, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore More 🐝
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
