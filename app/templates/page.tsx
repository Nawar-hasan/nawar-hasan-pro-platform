"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import { templates } from "@/lib/mock-data"
import {
  Download,
  Eye,
  Shield,
  Filter,
  FileText,
  Tag,
  X,
} from "lucide-react"

const categories = ["All", "Backend", "Frontend", "Mobile", "AI/ML", "Database", "DevOps"]

export default function TemplatesPage() {
  const { t, locale } = useI18n()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [previewTemplate, setPreviewTemplate] = useState<string | null>(null)
  const [downloadToast, setDownloadToast] = useState(false)

  const filtered =
    selectedCategory === "All"
      ? templates
      : templates.filter((tpl) => tpl.category === selectedCategory)

  const previewData = templates.find((t) => t.id === previewTemplate)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl font-bold text-[#d4af37] gold-glow sm:text-5xl text-balance">
              {t("templates.title")}
            </h1>
          </div>

          {/* Educational Notice */}
          <div className="mb-10 mx-auto max-w-2xl rounded-xl border border-[#00aaff]/20 bg-[#00aaff]/5 px-5 py-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-4 w-4 text-[#00aaff]" />
              <span className="text-xs text-[#00aaff] font-medium">
                {t("templates.educational")}
              </span>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
            <Filter className="h-4 w-4 text-muted-foreground shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-[#d4af37] text-black"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tpl) => (
              <div
                key={tpl.id}
                className="glass-card rounded-2xl p-6 transition-glow flex flex-col"
              >
                {/* Category & Level */}
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-[#00aaff]/10 px-3 py-1 text-xs text-[#00aaff] font-medium">
                    {tpl.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {tpl.level}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {tpl.title[locale]}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {tpl.description[locale]}
                </p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {tpl.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 rounded bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      <Tag className="h-2.5 w-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Files */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {tpl.files.map((file) => (
                    <span
                      key={file}
                      className="flex items-center gap-1 rounded bg-[#d4af37]/10 px-2 py-0.5 text-xs text-[#d4af37]"
                    >
                      <FileText className="h-2.5 w-2.5" />
                      {file}
                    </span>
                  ))}
                </div>

                {/* Price & License */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-[#d4af37]">
                    {tpl.price === 0 ? t("templates.free") : `$${tpl.price}`}
                  </span>
                  <span className="rounded-full border border-[#00aaff]/20 bg-[#00aaff]/5 px-2 py-0.5 text-[10px] text-[#00aaff]">
                    {locale === "ar" ? "تعليمي فقط" : "Educational Only"}
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setPreviewTemplate(tpl.id)}
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-border/50 py-2 text-sm text-foreground hover:border-[#00aaff]/30 hover:text-[#00aaff] transition-colors"
                  >
                    <Eye className="h-4 w-4" />
                    {t("templates.preview")}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setDownloadToast(true)
                      setTimeout(() => setDownloadToast(false), 2000)
                    }}
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-[#d4af37] py-2 text-sm font-semibold text-black hover:bg-[#e5c348] transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    {t("templates.download")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      {previewData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="glass-card rounded-2xl p-6 md:p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto border border-border/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl font-bold text-[#d4af37]">
                {previewData.title[locale]}
              </h3>
              <button
                type="button"
                onClick={() => setPreviewTemplate(null)}
                className="p-1 text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex gap-2">
                <span className="rounded-full bg-[#00aaff]/10 px-3 py-1 text-xs text-[#00aaff]">
                  {previewData.category}
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                  {previewData.level}
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {previewData.description[locale]}
              </p>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  {locale === "ar" ? "الملفات المضمنة" : "Included Files"}
                </h4>
                <div className="space-y-1">
                  {previewData.files.map((file) => (
                    <div
                      key={file}
                      className="flex items-center gap-2 rounded bg-secondary/50 px-3 py-2 text-xs text-foreground"
                    >
                      <FileText className="h-3.5 w-3.5 text-[#d4af37]" />
                      {file}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#00aaff]/20 bg-[#00aaff]/5 p-3">
                <p className="text-xs text-[#00aaff]">
                  {t("templates.educational")}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setPreviewTemplate(null)
                  setDownloadToast(true)
                  setTimeout(() => setDownloadToast(false), 2000)
                }}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#d4af37] py-2.5 text-sm font-semibold text-black hover:bg-[#e5c348] transition-colors"
              >
                <Download className="h-4 w-4" />
                {t("templates.download")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Download Toast */}
      {downloadToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-medium text-black shadow-lg">
          {locale === "ar"
            ? "تم بدء التحميل! (محاكاة)"
            : "Download started! (mock)"}
        </div>
      )}

      <Footer />
    </main>
  )
}
