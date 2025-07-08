"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Edit, Trash2, Calendar, User, Heart, ImageIcon, ArrowLeft, Eye } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

interface BlogPost {
  id: string
  title: string
  content: string
  author: string
  date: string
  likes: number
  image?: string
  excerpt: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isWriting, setIsWriting] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
    image: "",
  })

  // Demo posts
  const demoPosts: BlogPost[] = [
    {
      id: "demo-1",
      title: "My First Week at Buzzy Hive - A Magical Beginning! 🐝",
      content: `What an incredible first week it has been at Buzzy Hive! As a new teacher joining this amazing family, I couldn't be more excited to share my experience with you all.

From the moment I walked through those colorful doors, I was greeted by the most enthusiastic team of educators I've ever met. The energy here is absolutely contagious! The children's faces light up with curiosity and joy every single day.

Today, we had our first art session where the kids created their own bee characters. Little Emma made a purple bee with rainbow wings, and when I asked her why, she said "Because bees can be any color they dream to be!" Moments like these remind me why I became a teacher.

The collaborative environment here is something special. Every teacher supports each other, sharing creative ideas and celebrating each child's unique journey. I've already learned so much from my colleagues about making learning fun and engaging.

I can't wait to see what adventures await us in the coming weeks. This hive is truly buzzing with potential! 🌟`,
      author: "Miss Sarah Bloom",
      date: "2025-01-07",
      likes: 24,
      image: "🎨",
      excerpt: "My incredible first week experience at Buzzy Hive and the magical moments with our little learners...",
    },
    {
      id: "demo-2",
      title: "The Power of Music in Early Learning 🎵",
      content: `Music has this incredible ability to transform a classroom into a world of wonder and imagination. Today I want to share some amazing observations from our music sessions at Buzzy Hive.

This morning, we introduced a new song about counting bees, and I watched as shy little Marcus suddenly came alive, clapping and singing along with the biggest smile on his face. Music has this magical way of breaking down barriers and building confidence.

We've been incorporating rhythm into our math lessons, and the results are phenomenal! The children are learning addition and subtraction through musical patterns, and they're retaining information so much better. When learning becomes a song, it sticks in their hearts forever.

One of my favorite moments was when 4-year-old Lily created her own bee dance during free play. She was buzzing around the classroom, showing other children how bees collect nectar. It was a beautiful example of how music and movement can enhance understanding of the natural world.

The joy on their faces when we have our daily sing-along is priceless. These little ones are not just learning notes and rhythms; they're developing language skills, emotional expression, and social connections.

Music truly is the universal language of childhood! 🎶`,
      author: "Mr. Harmony Jones",
      date: "2025-01-05",
      likes: 18,
      image: "🎵",
      excerpt: "Discovering how music transforms learning and builds confidence in our young learners...",
    },
    {
      id: "demo-3",
      title: "Creating Magic Through Storytelling ✨",
      content: `There's something truly magical that happens when you gather a group of children around for story time. Their eyes widen, their imaginations soar, and suddenly, anything becomes possible.

Yesterday, we read "The Brave Little Bee" and I watched as each child connected with the story in their own unique way. Some children acted out the bee's journey, others drew pictures of the flowers the bee visited, and a few even created their own endings to the story.

What I love most about storytelling at Buzzy Hive is how we encourage children to become part of the narrative. They're not just passive listeners; they're active participants in creating magic. When we read about the bee's adventure, the children suggested different paths the bee could take, different friends it could meet.

Today, little Alex came up to me with a drawing of a superhero bee and said, "Miss Jenny, this is the bee from our story, but now it can fly to space!" This is the power of storytelling - it opens doors to infinite possibilities and encourages creative thinking.

We've started a tradition where children can share their own stories during our "Little Authors" time. The creativity and imagination they display is absolutely incredible. These young minds are natural storytellers, and it's our job to nurture that gift.

Reading isn't just about words on a page; it's about building dreams, fostering empathy, and creating lifelong learners. 📚`,
      author: "Miss Jenny Storyweaver",
      date: "2025-01-03",
      likes: 31,
      image: "📚",
      excerpt: "How storytelling creates magic and opens infinite possibilities for young minds...",
    },
  ]

  // Load posts from localStorage on component mount
  useEffect(() => {
    const savedPosts = localStorage.getItem("buzzy-hive-blog-posts")
    if (savedPosts) {
      const parsed = JSON.parse(savedPosts)
      setPosts([...demoPosts, ...parsed])
    } else {
      setPosts(demoPosts)
    }
  }, [])

  // Save posts to localStorage whenever posts change
  useEffect(() => {
    const userPosts = posts.filter((post) => !post.id.startsWith("demo-"))
    localStorage.setItem("buzzy-hive-blog-posts", JSON.stringify(userPosts))
  }, [posts])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPost.title && newPost.content && newPost.author) {
      const excerpt = newPost.content.substring(0, 150) + "..."

      if (editingPost) {
        // Update existing post
        setPosts(posts.map((post) => (post.id === editingPost.id ? { ...post, ...newPost, excerpt } : post)))
        setEditingPost(null)
      } else {
        // Create new post
        const post: BlogPost = {
          id: Date.now().toString(),
          ...newPost,
          date: new Date().toLocaleDateString(),
          likes: 0,
          excerpt,
        }
        setPosts([post, ...posts])
      }
      setNewPost({ title: "", content: "", author: "", image: "" })
      setIsWriting(false)
    }
  }

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post)
    setNewPost({
      title: post.title,
      content: post.content,
      author: post.author,
      image: post.image || "",
    })
    setIsWriting(true)
  }

  const handleDelete = (id: string) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  const handleLike = (id: string) => {
    setPosts(posts.map((post) => (post.id === id ? { ...post, likes: post.likes + 1 } : post)))
  }

  const cancelEdit = () => {
    setIsWriting(false)
    setEditingPost(null)
    setNewPost({ title: "", content: "", author: "", image: "" })
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setNewPost({ ...newPost, image: e.target?.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  // Individual Post View
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFF7E9] via-[#B4E4FF] to-[#C1F5C3]">
        <Navbar />

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
          <motion.button
            onClick={() => setSelectedPost(null)}
            className="flex items-center text-[#FF8AAE] hover:text-[#FFD93D] mb-8 font-semibold"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </motion.button>

          <motion.article
            className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header Image */}
            {selectedPost.image && (
              <div className="h-64 bg-gradient-to-r from-[#FFD93D] to-[#FF8AAE] flex items-center justify-center">
                {selectedPost.image.startsWith("data:") ? (
                  <img
                    src={selectedPost.image || "/placeholder.svg"}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <motion.div
                    className="text-8xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {selectedPost.image}
                  </motion.div>
                )}
              </div>
            )}

            <div className="p-8">
              {/* Meta Info */}
              <div className="flex items-center space-x-4 mb-6 text-[#2B2B2B]/70">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-4 h-4 mr-2 text-red-500" />
                  <span>{selectedPost.likes} likes</span>
                </div>
              </div>

              {/* Title */}
              <motion.h1
                className="text-4xl font-bold text-[#2B2B2B] mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {selectedPost.title}
              </motion.h1>

              {/* Content */}
              <motion.div
                className="prose prose-lg max-w-none text-[#2B2B2B]/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {selectedPost.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {/* Actions */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#2B2B2B]/10">
                <motion.button
                  onClick={() => handleLike(selectedPost.id)}
                  className="flex items-center space-x-2 text-[#FF8AAE] hover:text-[#FF8AAE]/80"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="w-5 h-5" />
                  <span>Like this post ({selectedPost.likes})</span>
                </motion.button>

                {!selectedPost.id.startsWith("demo-") && (
                  <div className="flex space-x-2">
                    <motion.button
                      onClick={() => handleEdit(selectedPost)}
                      className="p-2 text-[#FF8AAE] hover:bg-[#FF8AAE]/10 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Edit className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        handleDelete(selectedPost.id)
                        setSelectedPost(null)
                      }}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        </div>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF7E9] via-[#B4E4FF] to-[#C1F5C3]">
      <Navbar />

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
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
            {["🐝", "📝", "🌸", "💭"][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center mb-6"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <span className="text-6xl mr-4">📚</span>
            <h1 className="text-5xl font-bold text-[#2B2B2B]">Teacher's Journey Blog</h1>
          </motion.div>
          <p className="text-xl text-[#2B2B2B]/70 max-w-2xl mx-auto">
            Share your teaching experiences, insights, and magical moments with our buzzing community!
          </p>
        </motion.div>

        {/* Write New Post Button */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.button
            onClick={() => setIsWriting(true)}
            className="bg-gradient-to-r from-[#FF8AAE] to-[#FFD93D] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center mx-auto"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(255, 138, 174, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="w-5 h-5 mr-2" />
            Share Your Journey
          </motion.button>
        </motion.div>

        {/* Writing Form Modal */}
        <AnimatePresence>
          {isWriting && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-[#2B2B2B]">
                    {editingPost ? "Edit Your Story" : "Share Your Story"}
                  </h2>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="text-4xl"
                  >
                    🐝
                  </motion.div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[#2B2B2B] font-semibold mb-2">Your Name</label>
                    <input
                      type="text"
                      value={newPost.author}
                      onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#FFD93D] focus:border-[#FF8AAE] focus:outline-none"
                      placeholder="Teacher Bee 🐝"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[#2B2B2B] font-semibold mb-2">Story Title</label>
                    <input
                      type="text"
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#FFD93D] focus:border-[#FF8AAE] focus:outline-none"
                      placeholder="My Amazing Teaching Adventure..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[#2B2B2B] font-semibold mb-2">Add an Image (Optional)</label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="flex items-center px-4 py-2 bg-[#FFD93D] text-[#2B2B2B] rounded-lg cursor-pointer hover:bg-[#FF8AAE] hover:text-white transition-colors"
                      >
                        <ImageIcon className="w-4 h-4 mr-2" />
                        Upload Image
                      </label>
                      <input
                        type="text"
                        value={newPost.image}
                        onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
                        className="flex-1 px-4 py-2 rounded-lg border-2 border-[#FFD93D] focus:border-[#FF8AAE] focus:outline-none"
                        placeholder="Or add an emoji 🎨"
                      />
                    </div>
                    {newPost.image && (
                      <div className="mt-2 p-2 bg-gray-100 rounded-lg">
                        {newPost.image.startsWith("data:") ? (
                          <img
                            src={newPost.image || "/placeholder.svg"}
                            alt="Preview"
                            className="w-20 h-20 object-cover rounded"
                          />
                        ) : (
                          <span className="text-2xl">{newPost.image}</span>
                        )}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-[#2B2B2B] font-semibold mb-2">Your Story</label>
                    <textarea
                      value={newPost.content}
                      onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#FFD93D] focus:border-[#FF8AAE] focus:outline-none h-40 resize-none"
                      placeholder="Share your teaching journey, memorable moments with students, creative activities, or any insights you'd like to share with fellow educators..."
                      required
                    />
                  </div>

                  <div className="flex space-x-4">
                    <motion.button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-[#FF8AAE] to-[#FFD93D] text-white py-3 rounded-xl font-semibold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {editingPost ? "Update Story" : "Share Story"}
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={cancelEdit}
                      className="flex-1 bg-gray-300 text-[#2B2B2B] py-3 rounded-xl font-semibold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Cancel
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {posts.length === 0 ? (
              <motion.div
                className="col-span-full text-center py-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="text-8xl mb-6"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  📝
                </motion.div>
                <h3 className="text-3xl font-bold text-[#2B2B2B] mb-4">No Stories Yet!</h3>
                <p className="text-xl text-[#2B2B2B]/70">
                  Be the first teacher to share your amazing journey with our community!
                </p>
              </motion.div>
            ) : (
              posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => setSelectedPost(post)}
                >
                  {/* Image Header */}
                  {post.image && (
                    <div className="h-48 bg-gradient-to-r from-[#FFD93D] to-[#FF8AAE] flex items-center justify-center relative overflow-hidden">
                      {post.image.startsWith("data:") ? (
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <motion.div
                          className="text-6xl"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          {post.image}
                        </motion.div>
                      )}

                      {/* Demo Badge */}
                      {post.id.startsWith("demo-") && (
                        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full">
                          <span className="text-xs font-semibold text-[#FF8AAE]">✨ Demo Post</span>
                        </div>
                      )}

                      {/* Read More Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white/90 px-4 py-2 rounded-full flex items-center">
                          <Eye className="w-4 h-4 mr-2" />
                          <span className="font-semibold">Read More</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center space-x-4 mb-4 text-[#2B2B2B]/70 text-sm">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-[#2B2B2B] mb-3 line-clamp-2 group-hover:text-[#FF8AAE] transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-[#2B2B2B]/70 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleLike(post.id)
                        }}
                        className="flex items-center space-x-2 text-[#FF8AAE] hover:text-[#FF8AAE]/80"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Heart className="w-5 h-5" />
                        <span className="text-sm">{post.likes}</span>
                      </motion.button>

                      {!post.id.startsWith("demo-") && (
                        <div className="flex space-x-2">
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleEdit(post)
                            }}
                            className="p-2 text-[#FF8AAE] hover:bg-[#FF8AAE]/10 rounded-full"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Edit className="w-4 h-4" />
                          </motion.button>
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleDelete(post.id)
                            }}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </motion.button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </div>
  )
}
