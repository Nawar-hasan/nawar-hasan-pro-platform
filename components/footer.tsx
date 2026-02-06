"use client"

import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-border/50 bg-background/80">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="NAWAR_HASAN PRO"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="font-display text-lg font-bold text-[#d4af37]">
                NAWAR_HASAN PRO
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer.educational")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#d4af37]">
              {t("nav.services")}
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="/services" className="text-sm text-muted-foreground hover:text-[#00aaff] transition-colors">
                {t("services.mentorship")}
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-[#00aaff] transition-colors">
                {t("services.codereview")}
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-[#00aaff] transition-colors">
                {t("services.tutoring")}
              </Link>
              <Link href="/templates" className="text-sm text-muted-foreground hover:text-[#00aaff] transition-colors">
                {t("services.templates")}
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#d4af37]">
              {t("nav.support")}
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-[#00aaff] transition-colors">
                {t("nav.faq")}
              </Link>
              <Link href="/support" className="text-sm text-muted-foreground hover:text-[#00aaff] transition-colors">
                {t("support.title")}
              </Link>
              <Link href="/policy" className="text-sm text-muted-foreground hover:text-[#00aaff] transition-colors">
                {t("footer.policy")}
              </Link>
            </div>
          </div>

          {/* Integrity Notice */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#d4af37]">
              {t("integrity.title")}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t("integrity.text")}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 NAWAR_HASAN PRO. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
