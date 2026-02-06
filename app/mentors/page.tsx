"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import { mentors } from "@/lib/mock-data"
import { Star, Calendar, Clock, MessageSquare, ArrowRight, Flag } from "lucide-react"

export default function MentorsPage() {
  const { t, locale } = useI18n()
  const [selectedMentor, setSelectedMentor] = useState<string | null>(null)
  const [showMessage, setShowMessage] = useState(false)
  const [messageSent, setMessageSent] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl font-bold text-[#d4af37] gold-glow sm:text-5xl text-balance">
              {t("mentors.title")}
            </h1>
          </div>

          {/* Mentor Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mentors.map((mentor) => {
              const isExpanded = selectedMentor === mentor.id
              return (
                <div
                  key={mentor.id}
                  id={mentor.id}
                  className="glass-card rounded-2xl p-6 transition-glow flex flex-col"
                >
                  {/* Avatar & Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-[#d4af37]/30">
                      <Image
                        src={mentor.avatar || "/placeholder.svg"}
                        alt={mentor.name[locale]}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {mentor.name[locale]}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {mentor.title[locale]}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= Math.round(mentor.rating)
                              ? "fill-[#d4af37] text-[#d4af37]"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {mentor.rating}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      ({mentor.reviews_count} {t("mentors.reviews")})
                    </span>
                  </div>

                  {/* Skills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {mentor.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-[#00aaff]/10 px-3 py-1 text-xs text-[#00aaff] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                    {mentor.bio[locale]}
                  </p>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-[#d4af37]">
                      ${mentor.hourly_rate}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {t("mentors.hourly")}
                    </span>
                  </div>

                  {/* Available Slots */}
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedMentor(isExpanded ? null : mentor.id)
                      }
                      className="flex items-center gap-1.5 text-sm text-[#00aaff] hover:underline"
                    >
                      <Calendar className="h-3.5 w-3.5" />
                      {t("mentors.available")}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 space-y-1.5">
                        {mentor.available_slots.map((slot) => {
                          const date = new Date(slot)
                          return (
                            <div
                              key={slot}
                              className="flex items-center gap-2 rounded-md bg-secondary/50 px-3 py-2 text-xs"
                            >
                              <Clock className="h-3.5 w-3.5 text-[#d4af37]" />
                              <span className="text-foreground">
                                {date.toLocaleDateString(
                                  locale === "ar" ? "ar-SA" : "en-US",
                                  {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric",
                                  }
                                )}
                              </span>
                              <span className="text-muted-foreground">
                                {date.toLocaleTimeString(
                                  locale === "ar" ? "ar-SA" : "en-US",
                                  { hour: "2-digit", minute: "2-digit" }
                                )}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex gap-3">
                    <Link
                      href={`/booking?mentor=${mentor.id}`}
                      className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-[#d4af37] py-2.5 text-sm font-semibold text-black hover:bg-[#e5c348] transition-colors"
                    >
                      {t("mentors.book")}
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setShowMessage(true)
                        setTimeout(() => {
                          setMessageSent(true)
                          setTimeout(() => {
                            setShowMessage(false)
                            setMessageSent(false)
                          }, 2000)
                        }, 500)
                      }}
                      className="flex items-center justify-center gap-2 rounded-lg border border-[#00aaff]/30 bg-transparent px-4 py-2.5 text-sm text-[#00aaff] hover:bg-[#00aaff]/10 transition-colors"
                    >
                      <MessageSquare className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center rounded-lg border border-border/50 bg-transparent px-3 py-2.5 text-muted-foreground hover:text-foreground transition-colors"
                      title={t("common.report")}
                    >
                      <Flag className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Message Toast */}
      {showMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-lg bg-[#00aaff] px-6 py-3 text-sm font-medium text-black shadow-lg">
          {messageSent
            ? locale === "ar"
              ? "تم إرسال الرسالة!"
              : "Message sent!"
            : locale === "ar"
              ? "جاري الإرسال..."
              : "Sending..."}
        </div>
      )}

      <Footer />
    </main>
  )
}
