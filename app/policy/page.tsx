"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import { Shield, Check, X as XIcon } from "lucide-react"

export default function PolicyPage() {
  const { t, locale } = useI18n()

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00aaff]/10">
                <Shield className="h-8 w-8 text-[#00aaff]" />
              </div>
            </div>
            <h1 className="font-display text-4xl font-bold text-[#d4af37] gold-glow sm:text-5xl text-balance">
              {t("integrity.title")}
            </h1>
            <h2 className="mt-2 font-display text-lg text-muted-foreground">
              {t("footer.policy")}
            </h2>
          </div>

          <div className="space-y-8">
            {/* Main Policy */}
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <p className="text-base text-foreground leading-relaxed">
                {t("integrity.text")}
              </p>
            </div>

            {/* Allowed */}
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold text-emerald-400 mb-4">
                {locale === "ar" ? "ما هو مسموح" : "What Is Allowed"}
              </h3>
              <div className="space-y-3">
                {(locale === "ar"
                  ? [
                      "التوجيه والإرشاد الأكاديمي لمشاريع التخرج",
                      "مراجعة الكود وتقديم ملاحظات تعليمية",
                      "جلسات تعليمية فردية لتعزيز الفهم",
                      "ورش عمل ودورات تدريبية",
                      "قوالب تعليمية مع أدلة خطوة بخطوة",
                      "إعداد بيئات التطوير والنشر",
                      "الاستشارات التقنية والأكاديمية",
                    ]
                  : [
                      "Academic guidance and mentorship for graduation projects",
                      "Code review with educational feedback",
                      "1:1 tutoring sessions to enhance understanding",
                      "Workshops and training courses",
                      "Educational templates with step-by-step guides",
                      "Development environment setup and deployment",
                      "Technical and academic consultations",
                    ]
                ).map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Not Allowed */}
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold text-red-400 mb-4">
                {locale === "ar" ? "ما هو ممنوع" : "What Is NOT Allowed"}
              </h3>
              <div className="space-y-3">
                {(locale === "ar"
                  ? [
                      "كتابة أو إعداد أعمال كاملة نيابة عن الطالب",
                      "تسليم أعمال قابلة للتقديم كعمل شخصي للطالب",
                      "أي شكل من أشكال الغش أو عدم الأمانة الأكاديمية",
                      "استخدام القوالب التعليمية كتسليم مباشر",
                      "تقديم حلول جاهزة دون شرح تعليمي",
                    ]
                  : [
                      "Writing or preparing complete work on behalf of students",
                      "Delivering work to be submitted as the student's own",
                      "Any form of cheating or academic dishonesty",
                      "Using educational templates as direct submissions",
                      "Providing ready-made solutions without educational explanation",
                    ]
                ).map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <XIcon className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Responsibility */}
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold text-[#d4af37] mb-4">
                {locale === "ar" ? "مسؤولية الطالب" : "Student Responsibility"}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {locale === "ar"
                  ? "بموافقتك على استخدام خدماتنا، أنت تتعهد بأن جميع المواد والإرشادات المقدمة سوف تُستخدم لأغراض تعليمية وتدريبية فقط. أنت المسؤول الأول عن ضمان أن عملك النهائي المقدّم لمؤسستك التعليمية يعكس جهدك الشخصي وفهمك الخاص."
                  : "By agreeing to use our services, you commit that all materials and guidance provided will be used for educational and training purposes only. You are primarily responsible for ensuring that your final work submitted to your educational institution reflects your personal effort and understanding."}
              </p>
            </div>

            {/* Report Section */}
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-[#00aaff]/20">
              <h3 className="font-display text-lg font-semibold text-[#00aaff] mb-4">
                {locale === "ar" ? "الإبلاغ عن سلوك مخالف" : "Report Violations"}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {locale === "ar"
                  ? "إذا لاحظت أي سلوك مخالف لسياسة النزاهة الأكاديمية، يُرجى الإبلاغ فورًا عبر نظام التذاكر أو زر الإبلاغ المتاح في صفحات المرشدين."
                  : "If you notice any behavior that violates the academic integrity policy, please report immediately through the ticket system or the report button available on mentor pages."}
              </p>
              <a
                href="/support"
                className="inline-flex items-center gap-2 rounded-lg bg-[#00aaff] px-5 py-2 text-sm font-semibold text-black hover:bg-[#00bbff] transition-colors"
              >
                {locale === "ar" ? "الإبلاغ الآن" : "Report Now"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
