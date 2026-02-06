"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import { mentors, services } from "@/lib/mock-data"
import { Check, Shield, Calendar, Clock, Send } from "lucide-react"

export default function BookingPage() {
  const { t, locale } = useI18n()
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [ticketId, setTicketId] = useState("")
  const [agreedToPolicy, setAgreedToPolicy] = useState(false)

  const [form, setForm] = useState({
    name: "",
    university: "",
    major: "",
    level: "",
    description: "",
    language: locale,
    mentor: "",
    service: "",
    package: "basic",
    date: "",
    time: "",
  })

  const handleSubmit = () => {
    const id = `TKT-${Math.floor(1000 + Math.random() * 9000)}`
    setTicketId(id)
    setSubmitted(true)
  }

  const updateForm = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-24 pb-16 flex items-center justify-center min-h-[80vh]">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-lg mx-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 mb-6">
              <Check className="h-8 w-8 text-emerald-400" />
            </div>
            <h2 className="font-display text-2xl font-bold text-[#d4af37]">
              {t("booking.success")}{ticketId}
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              {locale === "ar"
                ? "سنتواصل معك قريبًا لتأكيد الجلسة. يمكنك متابعة طلبك من لوحة التحكم."
                : "We will contact you soon to confirm the session. You can track your order from the dashboard."}
            </p>
            <a
              href="/dashboard"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-6 py-2.5 text-sm font-semibold text-black hover:bg-[#e5c348] transition-colors"
            >
              {t("nav.dashboard")}
            </a>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="font-display text-3xl font-bold text-[#d4af37] gold-glow sm:text-4xl">
              {t("booking.title")}
            </h1>
          </div>

          {/* Steps Indicator */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                    step >= s
                      ? "bg-[#d4af37] text-black"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`h-0.5 w-12 transition-colors ${
                      step > s ? "bg-[#d4af37]" : "bg-secondary"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-8">
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <div className="space-y-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  {locale === "ar" ? "المعلومات الشخصية" : "Personal Information"}
                </h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1.5">
                      {t("booking.name")}
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => updateForm("name", e.target.value)}
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#00aaff] focus:outline-none focus:ring-1 focus:ring-[#00aaff]/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1.5">
                      {t("booking.university")}
                    </label>
                    <input
                      type="text"
                      value={form.university}
                      onChange={(e) => updateForm("university", e.target.value)}
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#00aaff] focus:outline-none focus:ring-1 focus:ring-[#00aaff]/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1.5">
                      {t("booking.major")}
                    </label>
                    <input
                      type="text"
                      value={form.major}
                      onChange={(e) => updateForm("major", e.target.value)}
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#00aaff] focus:outline-none focus:ring-1 focus:ring-[#00aaff]/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1.5">
                      {t("booking.level")}
                    </label>
                    <select
                      value={form.level}
                      onChange={(e) => updateForm("level", e.target.value)}
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground focus:border-[#00aaff] focus:outline-none focus:ring-1 focus:ring-[#00aaff]/50"
                    >
                      <option value="">--</option>
                      <option value="bachelor">
                        {locale === "ar" ? "بكالوريوس" : "Bachelor"}
                      </option>
                      <option value="master">
                        {locale === "ar" ? "ماجستير" : "Master"}
                      </option>
                      <option value="phd">
                        {locale === "ar" ? "دكتوراه" : "PhD"}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">
                    {t("booking.description")}
                  </label>
                  <textarea
                    rows={4}
                    value={form.description}
                    onChange={(e) => updateForm("description", e.target.value)}
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#00aaff] focus:outline-none focus:ring-1 focus:ring-[#00aaff]/50 resize-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full rounded-lg bg-[#d4af37] py-2.5 text-sm font-semibold text-black hover:bg-[#e5c348] transition-colors"
                >
                  {locale === "ar" ? "التالي" : "Next"}
                </button>
              </div>
            )}

            {/* Step 2: Service & Package */}
            {step === 2 && (
              <div className="space-y-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  {locale === "ar" ? "اختيار الخدمة والباقة" : "Select Service & Package"}
                </h3>

                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">
                    {locale === "ar" ? "الخدمة" : "Service"}
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => updateForm("service", e.target.value)}
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground focus:border-[#00aaff] focus:outline-none focus:ring-1 focus:ring-[#00aaff]/50"
                  >
                    <option value="">--</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {t(`services.${s.id}` as Parameters<typeof t>[0])}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">
                    {t("booking.package")}
                  </label>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {["basic", "standard", "premium"].map((pkg) => (
                      <button
                        key={pkg}
                        type="button"
                        onClick={() => updateForm("package", pkg)}
                        className={`rounded-lg border p-4 text-start transition-all ${
                          form.package === pkg
                            ? "border-[#d4af37] bg-[#d4af37]/10"
                            : "border-border/50 hover:border-[#d4af37]/30"
                        }`}
                      >
                        <span className="text-sm font-semibold text-foreground block">
                          {t(`package.${pkg}` as Parameters<typeof t>[0])}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {t(
                            `package.${pkg}.desc` as Parameters<typeof t>[0]
                          )}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">
                    {t("booking.mentor")}
                  </label>
                  <select
                    value={form.mentor}
                    onChange={(e) => updateForm("mentor", e.target.value)}
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground focus:border-[#00aaff] focus:outline-none focus:ring-1 focus:ring-[#00aaff]/50"
                  >
                    <option value="">
                      {locale === "ar" ? "أي مرشد متاح" : "Any available mentor"}
                    </option>
                    {mentors.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.name[locale]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1.5">
                      <Calendar className="inline h-3.5 w-3.5 mb-0.5" />{" "}
                      {locale === "ar" ? "التاريخ" : "Date"}
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => updateForm("date", e.target.value)}
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground focus:border-[#00aaff] focus:outline-none focus:ring-1 focus:ring-[#00aaff]/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1.5">
                      <Clock className="inline h-3.5 w-3.5 mb-0.5" />{" "}
                      {locale === "ar" ? "الوقت" : "Time"}
                    </label>
                    <select
                      value={form.time}
                      onChange={(e) => updateForm("time", e.target.value)}
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground focus:border-[#00aaff] focus:outline-none focus:ring-1 focus:ring-[#00aaff]/50"
                    >
                      <option value="">--</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 rounded-lg border border-border py-2.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
                  >
                    {t("common.back")}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 rounded-lg bg-[#d4af37] py-2.5 text-sm font-semibold text-black hover:bg-[#e5c348] transition-colors"
                  >
                    {locale === "ar" ? "التالي" : "Next"}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="space-y-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  {locale === "ar" ? "التأكيد والموافقة" : "Confirmation & Agreement"}
                </h3>

                {/* Summary */}
                <div className="rounded-lg border border-border/50 bg-background/50 p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t("booking.name")}</span>
                    <span className="text-foreground">{form.name || "—"}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t("booking.university")}</span>
                    <span className="text-foreground">{form.university || "—"}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{locale === "ar" ? "الخدمة" : "Service"}</span>
                    <span className="text-foreground">
                      {form.service
                        ? t(`services.${form.service}` as Parameters<typeof t>[0])
                        : "—"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t("booking.package")}</span>
                    <span className="text-foreground">
                      {t(`package.${form.package}` as Parameters<typeof t>[0])}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t("booking.date")}</span>
                    <span className="text-foreground">
                      {form.date} {form.time || ""}
                    </span>
                  </div>
                </div>

                {/* Academic Integrity Agreement */}
                <div className="rounded-xl border border-[#00aaff]/20 bg-[#00aaff]/5 p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="mt-0.5 h-5 w-5 shrink-0 text-[#00aaff]" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#00aaff]">
                        {t("integrity.title")}
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {t("integrity.text")}
                      </p>
                    </div>
                  </div>
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToPolicy}
                    onChange={(e) => setAgreedToPolicy(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-border accent-[#d4af37]"
                  />
                  <span className="text-sm text-foreground leading-relaxed">
                    {t("integrity.confirm")}
                  </span>
                </label>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 rounded-lg border border-border py-2.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
                  >
                    {t("common.back")}
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!agreedToPolicy}
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-[#d4af37] py-2.5 text-sm font-semibold text-black hover:bg-[#e5c348] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Send className="h-4 w-4" />
                    {t("booking.submit")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
