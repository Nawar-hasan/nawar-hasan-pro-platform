"use client"

import React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import { mockOrders, mockTickets } from "@/lib/mock-data"
import {
  Package,
  Calendar,
  MessageSquare,
  FileUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  Star,
  Send,
} from "lucide-react"

const tabs = ["orders", "sessions", "messages", "files"] as const

export default function DashboardPage() {
  const { t, locale } = useI18n()
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("orders")
  const [showRating, setShowRating] = useState<string | null>(null)
  const [rating, setRating] = useState(0)
  const [ratingSubmitted, setRatingSubmitted] = useState(false)

  const tabIcons: Record<string, React.ElementType> = {
    orders: Package,
    sessions: Calendar,
    messages: MessageSquare,
    files: FileUp,
  }

  const statusConfig: Record<string, { color: string; icon: React.ElementType }> = {
    progress: { color: "#00aaff", icon: Clock },
    waiting: { color: "#d4af37", icon: AlertCircle },
    completed: { color: "#22c55e", icon: CheckCircle2 },
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4">
          {/* Header */}
          <div className="mb-10">
            <h1 className="font-display text-3xl font-bold text-[#d4af37] gold-glow sm:text-4xl">
              {t("dashboard.title")}
            </h1>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-8 overflow-x-auto pb-2">
            {tabs.map((tab) => {
              const Icon = tabIcons[tab]
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 shrink-0 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                    activeTab === tab
                      ? "bg-[#d4af37] text-black"
                      : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {t(`dashboard.${tab}` as Parameters<typeof t>[0])}
                </button>
              )
            })}
          </div>

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div className="space-y-4">
              {mockOrders.map((order) => {
                const status = statusConfig[order.status]
                const StatusIcon = status.icon
                return (
                  <div
                    key={order.id}
                    className="glass-card rounded-xl p-5 transition-glow"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-mono text-muted-foreground">
                            {order.id}
                          </span>
                          <span
                            className="flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium"
                            style={{
                              backgroundColor: `${status.color}15`,
                              color: status.color,
                            }}
                          >
                            <StatusIcon className="h-3 w-3" />
                            {t(
                              `dashboard.status.${order.status}` as Parameters<
                                typeof t
                              >[0]
                            )}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-foreground">
                          {order.service[locale]}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {order.mentor[locale]} &middot;{" "}
                          {t(
                            `package.${order.package}` as Parameters<
                              typeof t
                            >[0]
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          {order.date}
                        </span>
                        {order.status === "completed" && (
                          <button
                            type="button"
                            onClick={() => {
                              setShowRating(order.id)
                              setRating(0)
                              setRatingSubmitted(false)
                            }}
                            className="flex items-center gap-1 rounded-lg border border-[#d4af37]/30 bg-transparent px-3 py-1.5 text-xs text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors"
                          >
                            <Star className="h-3 w-3" />
                            {t("common.rating")}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Sessions Tab */}
          {activeTab === "sessions" && (
            <div className="space-y-4">
              <div className="glass-card rounded-xl p-5 transition-glow">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="h-5 w-5 text-[#00aaff]" />
                  <h3 className="text-base font-semibold text-foreground">
                    {locale === "ar" ? "جلسة إرشاد قادمة" : "Upcoming Mentorship Session"}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {locale === "ar"
                    ? "د. أحمد علي - إرشاد مشروع التخرج"
                    : "Dr. Ahmad Ali - Project Mentorship"}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  2026-02-09 10:00 AM
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                    {locale === "ar" ? "مؤكدة" : "Confirmed"}
                  </span>
                </div>
              </div>

              <div className="glass-card rounded-xl p-5 transition-glow">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="h-5 w-5 text-[#d4af37]" />
                  <h3 className="text-base font-semibold text-foreground">
                    {locale === "ar" ? "جلسة مراجعة كود" : "Code Review Session"}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {locale === "ar"
                    ? "م. سارة حسن - مراجعة كود"
                    : "Eng. Sara Hassan - Code Review"}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  2026-02-11 02:00 PM
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="rounded-full bg-[#d4af37]/10 px-3 py-1 text-xs text-[#d4af37]">
                    {locale === "ar" ? "بانتظار التأكيد" : "Pending Confirmation"}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === "messages" && (
            <div className="glass-card rounded-xl p-5 transition-glow">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/20 text-[#d4af37] text-xs font-bold">
                    AA
                  </div>
                  <div className="rounded-lg bg-secondary/50 px-4 py-2.5 max-w-[80%]">
                    <p className="text-xs text-muted-foreground mb-0.5">
                      {locale === "ar" ? "د. أحمد علي" : "Dr. Ahmad Ali"}
                    </p>
                    <p className="text-sm text-foreground">
                      {locale === "ar"
                        ? "مرحبًا! تم مراجعة الملفات المرفقة. يرجى التحقق من الملاحظات."
                        : "Hello! I reviewed the attached files. Please check the notes."}
                    </p>
                    <span className="text-[10px] text-muted-foreground mt-1 block">
                      2:30 PM
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 flex-row-reverse">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00aaff]/20 text-[#00aaff] text-xs font-bold">
                    {locale === "ar" ? "أنت" : "You"}
                  </div>
                  <div className="rounded-lg bg-[#00aaff]/10 px-4 py-2.5 max-w-[80%]">
                    <p className="text-sm text-foreground">
                      {locale === "ar"
                        ? "شكرًا لك! سأراجعها وأعود إليك."
                        : "Thank you! I will review them and get back to you."}
                    </p>
                    <span className="text-[10px] text-muted-foreground mt-1 block text-end">
                      2:45 PM
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <input
                  type="text"
                  placeholder={locale === "ar" ? "اكتب رسالة..." : "Type a message..."}
                  className="flex-1 rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#00aaff] focus:outline-none"
                />
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00aaff] text-black hover:bg-[#00bbff] transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* Files Tab */}
          {activeTab === "files" && (
            <div className="space-y-4">
              <div className="glass-card rounded-xl p-5 transition-glow">
                <div className="border-2 border-dashed border-border/50 rounded-xl p-8 text-center hover:border-[#00aaff]/30 transition-colors">
                  <FileUp className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
                  <p className="text-sm text-muted-foreground">
                    {locale === "ar"
                      ? "اسحب الملفات هنا أو اضغط للرفع"
                      : "Drag files here or click to upload"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {locale === "ar"
                      ? "أنواع مدعومة: PDF, ZIP, DOC, أكواد"
                      : "Supported: PDF, ZIP, DOC, code files"}
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-5 transition-glow">
                <h3 className="text-sm font-semibold text-foreground mb-3">
                  {locale === "ar" ? "الملفات المرفوعة" : "Uploaded Files"}
                </h3>
                <div className="space-y-2">
                  {["project_proposal.pdf", "source_code.zip", "documentation.docx"].map(
                    (file) => (
                      <div
                        key={file}
                        className="flex items-center justify-between rounded-lg bg-secondary/50 px-4 py-2.5"
                      >
                        <span className="flex items-center gap-2 text-sm text-foreground">
                          <FileUp className="h-3.5 w-3.5 text-[#d4af37]" />
                          {file}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          2026-02-04
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Rating Modal */}
      {showRating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="glass-card rounded-2xl p-6 max-w-sm w-full border border-border/50">
            {ratingSubmitted ? (
              <div className="text-center py-4">
                <CheckCircle2 className="h-12 w-12 mx-auto text-emerald-400 mb-3" />
                <p className="text-sm text-foreground font-semibold">
                  {locale === "ar" ? "شكرًا لتقييمك!" : "Thank you for your rating!"}
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 text-center">
                  {t("common.rating")}
                </h3>
                <div className="flex justify-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setRating(s)}
                      className="p-1"
                    >
                      <Star
                        className={`h-8 w-8 transition-colors ${
                          s <= rating
                            ? "fill-[#d4af37] text-[#d4af37]"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <textarea
                  rows={3}
                  placeholder={
                    locale === "ar" ? "اكتب تعليقك (اختياري)..." : "Write your comment (optional)..."
                  }
                  className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#00aaff] focus:outline-none resize-none mb-4"
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowRating(null)}
                    className="flex-1 rounded-lg border border-border py-2 text-sm text-foreground hover:bg-secondary transition-colors"
                  >
                    {t("common.close")}
                  </button>
                  <button
                    type="button"
                    onClick={() => setRatingSubmitted(true)}
                    disabled={rating === 0}
                    className="flex-1 rounded-lg bg-[#d4af37] py-2 text-sm font-semibold text-black hover:bg-[#e5c348] transition-colors disabled:opacity-40"
                  >
                    {locale === "ar" ? "إرسال" : "Submit"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
