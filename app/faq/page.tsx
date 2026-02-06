"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import { ChevronDown } from "lucide-react"

const faqKeys = ["q1", "q2", "q3", "q4", "q5"] as const

export default function FAQPage() {
  const { t } = useI18n()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl font-bold text-[#d4af37] gold-glow sm:text-5xl text-balance">
              {t("faq.title")}
            </h1>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {faqKeys.map((key, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={key}
                  className="glass-card rounded-xl overflow-hidden transition-glow"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-start"
                  >
                    <h3 className="text-sm font-semibold text-foreground pe-4">
                      {t(`faq.${key}` as Parameters<typeof t>[0])}
                    </h3>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#d4af37] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(
                          `faq.${key.replace("q", "a")}` as Parameters<
                            typeof t
                          >[0]
                        )}
                      </p>
                    </div>
                  )}
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
