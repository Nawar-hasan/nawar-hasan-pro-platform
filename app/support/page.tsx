"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import { mockTickets } from "@/lib/mock-data"
import {
  Send,
  CheckCircle2,
  Clock,
  TicketIcon,
  Plus,
} from "lucide-react"

export default function SupportPage() {
  const { t, locale } = useI18n()
  const [activeView, setActiveView] = useState<"new" | "track">("new")
  const [submitted, setSubmitted] = useState(false)
  const [ticketId, setTicketId] = useState("")

  const handleSubmit = () => {
    const id = `TKT-${Math.floor(1000 + Math.random() * 9000)}`
    setTicketId(id)
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="font-display text-3xl font-bold text-[#d4af37] gold-glow sm:text-4xl">
              {t("support.title")}
            </h1>
          </div>

          {/* Tab Toggle */}
          <div className="flex gap-2 mb-8">
            <button
              type="button"
              onClick={() => {
                setActiveView("new")
                setSubmitted(false)
              }}
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                activeView === "new"
                  ? "bg-[#d4af37] text-black"
                  : "bg-secondary/50 text-muted-foreground"
              }`}
            >
              <Plus className="h-4 w-4" />
              {t("support.new")}
            </button>
            <button
              type="button"
              onClick={() => setActiveView("track")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                activeView === "track"
                  ? "bg-[#d4af37] text-black"
                  : "bg-secondary/50 text-muted-foreground"
              }`}
            >
              <TicketIcon className="h-4 w-4" />
              {t("support.track")}
            </button>
          </div>

          {/* New Ticket */}
          {activeView === "new" && !submitted && (
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                {t("support.new")}
              </h3>
              <div className="space-y-5">
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">
                    {t("support.subject")}
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground focus:border-[#00aaff] focus:outline-none focus:ring-1 focus:ring-[#00aaff]/50"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">
                    {t("support.message")}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground focus:border-[#00aaff] focus:outline-none focus:ring-1 focus:ring-[#00aaff]/50 resize-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">
                    {locale === "ar" ? "مرفقات (اختياري)" : "Attachments (optional)"}
                  </label>
                  <div className="border-2 border-dashed border-border/50 rounded-lg p-4 text-center hover:border-[#00aaff]/30 transition-colors cursor-pointer">
                    <p className="text-xs text-muted-foreground">
                      {locale === "ar"
                        ? "اسحب الملفات هنا أو اضغط للرفع"
                        : "Drag files here or click to upload"}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#00aaff] py-2.5 text-sm font-semibold text-black hover:bg-[#00bbff] transition-colors"
                >
                  <Send className="h-4 w-4" />
                  {t("support.send")}
                </button>
              </div>
            </div>
          )}

          {/* Submission Success */}
          {activeView === "new" && submitted && (
            <div className="glass-card rounded-2xl p-8 text-center">
              <CheckCircle2 className="h-14 w-14 mx-auto text-emerald-400 mb-4" />
              <h3 className="font-display text-xl font-bold text-[#d4af37]">
                {locale === "ar"
                  ? `تم إرسال التذكرة بنجاح! رقم التذكرة: ${ticketId}`
                  : `Ticket submitted successfully! Ticket #: ${ticketId}`}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {locale === "ar"
                  ? "سنرد عليك في أقرب وقت ممكن."
                  : "We will respond as soon as possible."}
              </p>
            </div>
          )}

          {/* Track Tickets */}
          {activeView === "track" && (
            <div className="space-y-4">
              {mockTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="glass-card rounded-xl p-5 transition-glow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-muted-foreground">
                      {ticket.id}
                    </span>
                    <span
                      className={`flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        ticket.status === "open"
                          ? "bg-[#00aaff]/10 text-[#00aaff]"
                          : "bg-emerald-500/10 text-emerald-400"
                      }`}
                    >
                      {ticket.status === "open" ? (
                        <Clock className="h-3 w-3" />
                      ) : (
                        <CheckCircle2 className="h-3 w-3" />
                      )}
                      {ticket.status === "open"
                        ? locale === "ar"
                          ? "مفتوح"
                          : "Open"
                        : locale === "ar"
                          ? "تم الحل"
                          : "Resolved"}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {ticket.subject[locale]}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {ticket.date}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
