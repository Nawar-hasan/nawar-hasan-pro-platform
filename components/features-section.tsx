"use client"

import { useI18n } from "@/lib/i18n"
import { Shield, GraduationCap, Code2, Presentation } from "lucide-react"

const featureIcons = [Shield, GraduationCap, Code2, Presentation]
const featureKeys = ["reliability", "guidance", "code", "workshops"] as const

export function FeaturesSection() {
  const { t } = useI18n()

  return (
    <section className="relative py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center font-display text-3xl font-bold text-[#d4af37] gold-glow sm:text-4xl text-balance">
          {t("features.title")}
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureKeys.map((key, i) => {
            const Icon = featureIcons[i]
            return (
              <div
                key={key}
                className="glass-card rounded-2xl p-6 transition-glow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00aaff]/10">
                  <Icon className="h-6 w-6 text-[#00aaff]" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {t(`features.${key}` as Parameters<typeof t>[0])}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {t(`features.${key}.desc` as Parameters<typeof t>[0])}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
