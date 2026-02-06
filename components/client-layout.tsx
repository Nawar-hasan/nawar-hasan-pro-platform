"use client"

import type { ReactNode } from "react"
import { I18nProvider, useI18n } from "@/lib/i18n"

function LayoutInner({ children }: { children: ReactNode }) {
  const { dir } = useI18n()
  return <div dir={dir}>{children}</div>
}

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <LayoutInner>{children}</LayoutInner>
    </I18nProvider>
  )
}
