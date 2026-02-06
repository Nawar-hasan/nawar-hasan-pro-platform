"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { GraduationCap, Code2, Users, Settings, Presentation, FileText, ArrowRight } from "lucide-react"

const serviceData = [
  { key: "mentorship", Icon: GraduationCap },
  { key: "codereview", Icon: Code2 },
  { key: "tutoring", Icon: Users },
  { key: "environment", Icon: Settings },
  { key: "workshops", Icon: Presentation },
  { key: "templates", Icon: FileText },
] as const

export function ServicesPreview() {
  const { t } = useI18n()

  return (
    <section className="relative py-24 bg-background/50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center font-display text-3xl font-bold text-[#d4af37] gold-glow sm:text-4xl text-balance">
          {t("services.title")}
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceData.map(({ key, Icon }) => (
            <Link
              key={key}
              href={`/services#${key}`}
              className="group glass-card rounded-2xl p-6 transition-glow"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/10">
                  <Icon className="h-6 w-6 text-[#d4af37]" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {t(`services.${key}` as Parameters<typeof t>[0])}
                </h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {t(`services.${key}.desc` as Parameters<typeof t>[0])}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#00aaff] opacity-0 group-hover:opacity-100 transition-opacity">
                {t("common.learnmore")}
                <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
