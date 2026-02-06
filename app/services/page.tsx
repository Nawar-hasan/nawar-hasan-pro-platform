"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import { services } from "@/lib/mock-data"
import {
  GraduationCap,
  Code2,
  Users,
  Settings,
  Presentation,
  FileText,
  Check,
  X as XIcon,
  ArrowRight,
  Shield,
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  mentorship: GraduationCap,
  codereview: Code2,
  tutoring: Users,
  environment: Settings,
  workshops: Presentation,
  templates: FileText,
}

const serviceKeys = [
  "mentorship",
  "codereview",
  "tutoring",
  "environment",
  "workshops",
  "templates",
] as const

export default function ServicesPage() {
  const { t } = useI18n()
  const [expandedService, setExpandedService] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl font-bold text-[#d4af37] gold-glow sm:text-5xl text-balance">
              {t("services.title")}
            </h1>
          </div>

          {/* Integrity Banner */}
          <div className="mb-12 rounded-xl border border-[#00aaff]/20 bg-[#00aaff]/5 px-6 py-4">
            <div className="flex items-start gap-3">
              <Shield className="mt-0.5 h-5 w-5 shrink-0 text-[#00aaff]" />
              <div>
                <h3 className="text-sm font-semibold text-[#00aaff]">
                  {t("integrity.title")}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {t("integrity.text")}
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8">
            {serviceKeys.map((key) => {
              const Icon = iconMap[key]
              const service = services.find((s) => s.id === key)
              const isExpanded = expandedService === key

              return (
                <div
                  key={key}
                  id={key}
                  className="glass-card rounded-2xl p-6 md:p-8 transition-glow"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    {/* Service Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/10">
                          <Icon className="h-7 w-7 text-[#d4af37]" />
                        </div>
                        <div>
                          <h2 className="font-display text-xl font-bold text-foreground">
                            {t(`services.${key}` as Parameters<typeof t>[0])}
                          </h2>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {t(
                              `services.${key}.desc` as Parameters<typeof t>[0]
                            )}
                          </p>
                        </div>
                      </div>

                      {/* Allowed / Not Allowed */}
                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-lg bg-emerald-500/5 border border-emerald-500/10 p-4">
                          <h4 className="text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-wide">
                            {t("common.learnmore")} - Allowed
                          </h4>
                          <ul className="space-y-1.5">
                            <li className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                              Academic guidance & mentorship
                            </li>
                            <li className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                              Code review & feedback
                            </li>
                            <li className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                              Learning support & tutoring
                            </li>
                          </ul>
                        </div>
                        <div className="rounded-lg bg-red-500/5 border border-red-500/10 p-4">
                          <h4 className="text-xs font-semibold text-red-400 mb-2 uppercase tracking-wide">
                            Not Allowed
                          </h4>
                          <ul className="space-y-1.5">
                            <li className="flex items-center gap-2 text-xs text-muted-foreground">
                              <XIcon className="h-3.5 w-3.5 text-red-400 shrink-0" />
                              Writing/submitting work for students
                            </li>
                            <li className="flex items-center gap-2 text-xs text-muted-foreground">
                              <XIcon className="h-3.5 w-3.5 text-red-400 shrink-0" />
                              Complete project delivery
                            </li>
                            <li className="flex items-center gap-2 text-xs text-muted-foreground">
                              <XIcon className="h-3.5 w-3.5 text-red-400 shrink-0" />
                              Any form of academic dishonesty
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Packages */}
                    <div className="md:w-96 space-y-3">
                      <h4 className="text-sm font-semibold text-[#d4af37] mb-3">
                        {t("booking.package")}
                      </h4>
                      {service?.packages.map((pkg) => (
                        <div
                          key={pkg.name}
                          className="flex items-center justify-between rounded-lg border border-border/50 bg-background/50 p-3 hover:border-[#d4af37]/30 transition-colors"
                        >
                          <div>
                            <span className="text-sm font-medium text-foreground">
                              {t(
                                `package.${pkg.name}` as Parameters<
                                  typeof t
                                >[0]
                              )}
                            </span>
                            <p className="text-xs text-muted-foreground">
                              {t(
                                `package.${pkg.name}.desc` as Parameters<
                                  typeof t
                                >[0]
                              )}
                            </p>
                          </div>
                          <div className="text-end">
                            <span className="text-lg font-bold text-[#d4af37]">
                              ${pkg.price}
                            </span>
                            <p className="text-xs text-muted-foreground">
                              {pkg.duration}
                            </p>
                          </div>
                        </div>
                      ))}
                      <Link
                        href={`/booking?service=${key}`}
                        className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#00aaff] py-2.5 text-sm font-semibold text-black hover:bg-[#00bbff] transition-colors blue-glow"
                      >
                        {t("booking.title")}
                        <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                      </Link>
                    </div>
                  </div>
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
