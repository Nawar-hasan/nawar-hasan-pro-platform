"use client"

import React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  const { t, locale } = useI18n()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative py-32 plasma-bg">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-[#d4af37] gold-glow sm:text-5xl text-balance">
            {locale === "ar" ? "تواصل معنا" : "Contact Us"}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {locale === "ar"
              ? "لديك استفسار أو تحتاج مساعدة؟ تواصل معنا وسنرد عليك في أقرب وقت."
              : "Have a question or need help? Contact us and we'll get back to you as soon as possible."}
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4">
          <div className="glass-card rounded-2xl p-8 lg:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                  <Send className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="mb-2 font-display text-2xl font-semibold text-foreground">
                  {locale === "ar" ? "تم الإرسال بنجاح!" : "Sent Successfully!"}
                </h3>
                <p className="text-muted-foreground">
                  {locale === "ar"
                    ? "شكراً لتواصلك معنا. سنرد عليك قريباً."
                    : "Thank you for contacting us. We'll respond soon."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    {locale === "ar" ? "الاسم الكامل" : "Full Name"}
                  </Label>
                  <Input
                    id="name"
                    required
                    placeholder={locale === "ar" ? "أدخل اسمك" : "Enter your name"}
                    className="mt-1.5 bg-background/50"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">
                    {locale === "ar" ? "البريد الإلكتروني" : "Email"}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder={locale === "ar" ? "your@email.com" : "your@email.com"}
                    className="mt-1.5 bg-background/50"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-foreground">
                    {locale === "ar" ? "الموضوع" : "Subject"}
                  </Label>
                  <Input
                    id="subject"
                    required
                    placeholder={locale === "ar" ? "عن ماذا تريد التحدث؟" : "What is this about?"}
                    className="mt-1.5 bg-background/50"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">
                    {locale === "ar" ? "الرسالة" : "Message"}
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    placeholder={
                      locale === "ar"
                        ? "اكتب رسالتك هنا..."
                        : "Write your message here..."
                    }
                    className="mt-1.5 bg-background/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#d4af37] text-black hover:bg-[#d4af37]/90 font-semibold"
                >
                  <Send className="h-4 w-4 rtl:rotate-180" />
                  {locale === "ar" ? "إرسال الرسالة" : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#00aaff]/20">
                <Mail className="h-6 w-6 text-[#00aaff]" />
              </div>
              <h3 className="mb-1 font-display text-lg font-semibold text-foreground">
                {locale === "ar" ? "البريد الإلكتروني" : "Email"}
              </h3>
              <p className="text-sm text-muted-foreground">support@nawarhasan.com</p>
            </div>

            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#00aaff]/20">
                <MessageSquare className="h-6 w-6 text-[#00aaff]" />
              </div>
              <h3 className="mb-1 font-display text-lg font-semibold text-foreground">
                {locale === "ar" ? "الدعم الفني" : "Technical Support"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {locale === "ar" ? "متاح على مدار الساعة" : "Available 24/7"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
