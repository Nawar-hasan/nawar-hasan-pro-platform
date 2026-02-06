"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import { Award, Target, Heart, Shield } from "lucide-react"

export default function AboutPage() {
  const { t, locale } = useI18n()

  const values = [
    {
      icon: Shield,
      title: { en: "Academic Integrity", ar: "النزاهة الأكاديمية" },
      desc: { en: "We guide, we don't do the work for you", ar: "نرشد ولا ننجز عنك" },
    },
    {
      icon: Heart,
      title: { en: "Student-Centered", ar: "محورها الطالب" },
      desc: { en: "Your success is our priority", ar: "نجاحك هو أولويتنا" },
    },
    {
      icon: Target,
      title: { en: "Quality Focused", ar: "جودة عالية" },
      desc: { en: "Only verified mentors and resources", ar: "مُرشدون وموارد موثوقة فقط" },
    },
    {
      icon: Award,
      title: { en: "Results Driven", ar: "موجهة بالنتائج" },
      desc: { en: "Proven track record of student success", ar: "سجل حافل في نجاح الطلاب" },
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative py-32 plasma-bg">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-[#d4af37] gold-glow sm:text-5xl text-balance">
            {locale === "ar" ? "عن المنصة" : "About Us"}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {locale === "ar"
              ? "منصة تعليمية احترافية تقدم الدعم الأكاديمي والتقني للطلاب، مع التركيز على الإرشاد والتطوير بنزاهة."
              : "A professional educational platform providing academic and technical support to students, focused on guidance and development with integrity."}
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-16 text-center font-display text-3xl font-bold text-[#d4af37] gold-glow sm:text-4xl">
            {locale === "ar" ? "قيمنا الأساسية" : "Our Core Values"}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-8 text-center transition-glow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37]/20">
                  <value.icon className="h-8 w-8 text-[#d4af37]" />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                  {value.title[locale]}
                </h3>
                <p className="text-sm text-muted-foreground">{value.desc[locale]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-[#d4af37] gold-glow sm:text-4xl">
            {locale === "ar" ? "مهمتنا" : "Our Mission"}
          </h2>
          <div className="glass-card rounded-2xl p-8 text-center">
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              {locale === "ar"
                ? "نسعى لتمكين الطلاب من خلال توفير الإرشاد والموارد والدعم التقني اللازم لتحقيق التميز الأكاديمي والمهني، مع الحفاظ على أعلى معايير النزاهة والجودة."
                : "We strive to empower students by providing the guidance, resources, and technical support necessary to achieve academic and professional excellence, while maintaining the highest standards of integrity and quality."}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
