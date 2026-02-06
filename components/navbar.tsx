"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"
import { Menu, X, Globe, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { t, locale, setLocale, dir } = useI18n()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/services", label: t("nav.services") },
    { href: "/templates", label: t("nav.templates") },
    { href: "/mentors", label: t("nav.mentors") },
    { href: "/resources", label: t("nav.resources" as Parameters<typeof t>[0]) || "Resources" },
    { href: "/faq", label: t("nav.faq") },
    { href: "/support", label: t("nav.support") },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(16px)" }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="NAWAR_HASAN PRO Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-display text-lg font-bold text-[#d4af37] gold-glow hidden sm:inline">
              NAWAR_HASAN PRO
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-foreground/80 hover:text-[#d4af37] transition-colors rounded-md hover:bg-foreground/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              type="button"
              onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
              className="flex items-center gap-1.5 rounded-full border border-border/50 px-3 py-1.5 text-xs text-foreground/80 hover:text-[#00aaff] hover:border-[#00aaff]/30 transition-all"
              aria-label="Toggle Language"
            >
              <Globe className="h-3.5 w-3.5" />
              {locale === "ar" ? "EN" : "AR"}
            </button>

            {/* Dashboard */}
            <Link
              href="/dashboard"
              className="flex items-center gap-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-3 py-1.5 text-xs text-[#d4af37] hover:bg-[#d4af37]/20 transition-all"
            >
              <User className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{t("nav.dashboard")}</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-foreground/80 hover:text-foreground"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm text-foreground/80 hover:text-[#d4af37] hover:bg-foreground/5 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
