"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ServicesPreview } from "@/components/services-preview"
import { MentorsPreview } from "@/components/mentors-preview"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ServicesPreview />
      <MentorsPreview />
      <Footer />
    </main>
  )
}
