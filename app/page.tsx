"use client"

import { useState, useEffect } from "react"
import Preloader from "@/components/preloader"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import BeeStrip from "@/components/bee-strip"
import ChildGallery from "@/components/child-gallery"
import TeacherSection from "@/components/teacher-section"
import TeacherShowcase from "@/components/teacher-showcase"
import FAQSection from "@/components/faq-section"
import EmailSection from "@/components/email-section"
import Footer from "@/components/footer"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import ActivitiesSection from "@/components/activities-section"
import NewsletterSection from "@/components/newsletter-section"

export default function Home() {

const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000) // 4 seconds for preloader

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />
  }

  return (
    <div className="min-h-screen bg-[#FFF7E9] overflow-x-hidden">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <BeeStrip />

      <section id="programs">
        <ActivitiesSection />
      </section>

      <section id="gallery">
        <ChildGallery />
      </section>

      <section id="teachers">
        <TeacherSection />
      </section>

      <TeacherShowcase />
      <StatsSection />

      <section id="about">
        <TestimonialsSection />
      </section>

      <section id="blog">
        <FAQSection />
      </section>

      <section id="contact">
        <NewsletterSection />
      </section>

      <EmailSection />
      <Footer />
    </div>
  )
}