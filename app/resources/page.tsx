"use client"

import React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import { resources } from "@/lib/mock-data"
import {
  FileText,
  Video,
  CheckSquare,
  Filter,
} from "lucide-react"

const typeIcons: Record<string, React.ElementType> = {
  article: FileText,
  video: Video,
  checklist: CheckSquare,
}

const typeColors: Record<string, string> = {
  article: "#d4af37",
  video: "#00aaff",
  checklist: "#22c55e",
}

const filterOptions = ["all", "article", "video", "checklist"]

export default function ResourcesPage() {
  const { t, locale } = useI18n()
  const [filter, setFilter] = useState("all")

  const filtered =
    filter === "all" ? resources : resources.filter((r) => r.type === filter)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl font-bold text-[#d4af37] gold-glow sm:text-5xl text-balance">
              {t("resources.title")}
            </h1>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
            <Filter className="h-4 w-4 text-muted-foreground shrink-0" />
            {filterOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setFilter(opt)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  filter === opt
                    ? "bg-[#d4af37] text-black"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {opt === "all"
                  ? locale === "ar"
                    ? "الكل"
                    : "All"
                  : t(`resources.${opt}s` as Parameters<typeof t>[0])}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid gap-4">
            {filtered.map((resource) => {
              const Icon = typeIcons[resource.type]
              const color = typeColors[resource.type]

              return (
                <div
                  key={resource.id}
                  className="glass-card rounded-xl p-5 transition-glow flex items-start gap-4"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <Icon className="h-5 w-5" style={{ color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {resource.title[locale]}
                      </h3>
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                        style={{
                          backgroundColor: `${color}15`,
                          color,
                        }}
                      >
                        {resource.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {resource.description[locale]}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="shrink-0 rounded-lg border border-border/50 px-4 py-2 text-xs text-foreground hover:border-[#00aaff]/30 hover:text-[#00aaff] transition-colors"
                  >
                    {t("common.learnmore")}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
