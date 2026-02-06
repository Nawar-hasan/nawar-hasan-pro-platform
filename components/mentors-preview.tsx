"use client"

import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"
import { mentors } from "@/lib/mock-data"
import { Star, ArrowRight } from "lucide-react"

export function MentorsPreview() {
  const { t, locale } = useI18n()

  return (
    <section className="relative py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-16">
          <h2 className="font-display text-3xl font-bold text-[#d4af37] gold-glow sm:text-4xl text-balance">
            {t("mentors.title")}
          </h2>
          <Link
            href="/mentors"
            className="flex items-center gap-1 text-sm text-[#00aaff] hover:underline"
          >
            {t("common.learnmore")}
            <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {mentors.map((mentor) => (
            <Link
              key={mentor.id}
              href={`/mentors#${mentor.id}`}
              className="glass-card rounded-2xl p-6 transition-glow"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-[#d4af37]/30">
                  <Image
                    src={mentor.avatar || "/placeholder.svg"}
                    alt={mentor.name[locale]}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {mentor.name[locale]}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {mentor.title[locale]}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1">
                <Star className="h-4 w-4 fill-[#d4af37] text-[#d4af37]" />
                <span className="text-sm font-medium text-foreground">{mentor.rating}</span>
                <span className="text-xs text-muted-foreground">
                  ({mentor.reviews_count} {t("mentors.reviews")})
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {mentor.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#00aaff]/10 px-2.5 py-0.5 text-xs text-[#00aaff]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-4 text-sm text-[#d4af37] font-medium">
                ${mentor.hourly_rate}{t("mentors.hourly")}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
