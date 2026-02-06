"use client"

import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { ArrowRight, BookOpen, MessageSquare } from "lucide-react"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-screen flex items-center justify-center plasma-bg overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-[#00aaff]/30 animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-[#d4af37]/20 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-[#00aaff]/20 animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 rounded-full bg-[#d4af37]/30 animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#d4af37]/20 blur-2xl" />
            <Image
              src="/images/logo.png"
              alt="NAWAR_HASAN PRO Logo"
              width={140}
              height={140}
              className="relative rounded-full"
              priority
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-[#d4af37] gold-glow sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          {t("hero.title")}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 font-display text-xl text-foreground/90 sm:text-2xl md:text-3xl text-balance">
          {t("hero.subtitle")}
        </p>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
          {t("hero.description")}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/services"
            className="group flex items-center gap-2 rounded-full bg-[#d4af37] px-7 py-3.5 text-sm font-semibold text-black hover:bg-[#e5c348] transition-all blue-glow"
          >
            {t("hero.cta.services")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </Link>
          <Link
            href="/booking"
            className="group flex items-center gap-2 rounded-full border-2 border-[#00aaff] bg-transparent px-7 py-3.5 text-sm font-semibold text-[#00aaff] hover:bg-[#00aaff]/10 transition-all blue-glow"
          >
            <MessageSquare className="h-4 w-4" />
            {t("hero.cta.session")}
          </Link>
          <Link
            href="/templates"
            className="group flex items-center gap-2 rounded-full border border-border/50 bg-transparent px-7 py-3.5 text-sm font-semibold text-foreground/80 hover:text-foreground hover:border-[#d4af37]/50 transition-all"
          >
            <BookOpen className="h-4 w-4" />
            {t("hero.cta.templates")}
          </Link>
        </div>

        {/* Integrity Notice */}
        <div className="mt-12 mx-auto max-w-2xl rounded-xl border border-[#00aaff]/20 bg-[#00aaff]/5 px-6 py-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00aaff]/20">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00aaff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div className="text-start">
              <h3 className="text-sm font-semibold text-[#00aaff]">
                {t("integrity.title")}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {t("integrity.text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
