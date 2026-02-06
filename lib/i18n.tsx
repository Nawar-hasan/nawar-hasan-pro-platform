"use client"

import React, { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Locale = "ar" | "en"

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.services": "Student Services",
    "nav.workshops": "Workshops",
    "nav.templates": "Templates Library",
    "nav.mentors": "Mentors",
    "nav.faq": "FAQ",
    "nav.support": "Support",
    "nav.dashboard": "Dashboard",
    // Hero
    "hero.title": "NAWAR_HASAN PRO",
    "hero.subtitle": "Your Educational & Technical Support with High Expertise",
    "hero.description": "We empower you to learn, grow, and complete your project under professional supervision — while respecting academic integrity.",
    "hero.cta.services": "Browse Services",
    "hero.cta.session": "Book a Consultation",
    "hero.cta.templates": "Explore Templates",
    // Features
    "features.title": "Why Choose Us",
    "features.reliability": "Reliability",
    "features.reliability.desc": "Professional mentors with academic and industry experience",
    "features.guidance": "Academic Guidance",
    "features.guidance.desc": "Step-by-step project mentorship following academic standards",
    "features.code": "Code Review",
    "features.code.desc": "Detailed code review and debugging sessions",
    "features.workshops": "Workshops",
    "features.workshops.desc": "Live and recorded workshops on trending technologies",
    // Services
    "services.title": "Our Services",
    "services.mentorship": "Project Mentorship",
    "services.mentorship.desc": "Guided mentorship for graduation projects — advisory and educational only",
    "services.codereview": "Code Review & Debugging",
    "services.codereview.desc": "Expert review of your code with detailed feedback and improvements",
    "services.tutoring": "1:1 Tutoring",
    "services.tutoring.desc": "Personalized tutoring sessions tailored to your learning needs",
    "services.environment": "Environment Setup & Deployment",
    "services.environment.desc": "Help setting up development environments and deployment pipelines",
    "services.workshops": "Workshops",
    "services.workshops.desc": "Live and recorded workshops on in-demand technologies",
    "services.templates": "Learning Templates",
    "services.templates.desc": "Educational project templates with step-by-step guides",
    // Integrity
    "integrity.title": "Academic Integrity Policy",
    "integrity.text": "This platform does NOT provide work intended for submission on behalf of students. All services are educational and advisory in nature, aimed at enhancing learning and adhering to academic integrity policies.",
    "integrity.confirm": "I confirm this will be used for learning and not submitted as my own work",
    // Mentors
    "mentors.title": "Our Mentors",
    "mentors.book": "Book Session",
    "mentors.message": "Send Message",
    "mentors.reviews": "reviews",
    "mentors.hourly": "/hour",
    "mentors.available": "Available Slots",
    // Templates
    "templates.title": "Educational Templates",
    "templates.download": "Download",
    "templates.preview": "Preview",
    "templates.educational": "For educational use only — not for submission as student work",
    "templates.free": "Free",
    // Booking
    "booking.title": "Book a Session",
    "booking.name": "Full Name",
    "booking.university": "University / Institution",
    "booking.major": "Major",
    "booking.level": "Academic Level",
    "booking.description": "Describe your project/problem (learning points)",
    "booking.language": "Preferred Language",
    "booking.mentor": "Preferred Mentor",
    "booking.package": "Select Package",
    "booking.date": "Select Date & Time",
    "booking.submit": "Submit Request",
    "booking.success": "Request submitted successfully! Ticket #",
    // Packages
    "package.basic": "Basic",
    "package.basic.desc": "1-hour consultation session",
    "package.standard": "Standard",
    "package.standard.desc": "5 hours mentorship with milestone tracking",
    "package.premium": "Premium",
    "package.premium.desc": "10 hours mentorship + 2 code reviews + priority support",
    // Dashboard
    "dashboard.title": "Student Dashboard",
    "dashboard.orders": "My Orders",
    "dashboard.sessions": "Booked Sessions",
    "dashboard.messages": "Messages",
    "dashboard.files": "Project Files",
    "dashboard.status.progress": "In Progress",
    "dashboard.status.waiting": "Awaiting Student",
    "dashboard.status.completed": "Completed",
    // Support
    "support.title": "Support & Tickets",
    "support.new": "New Ticket",
    "support.subject": "Subject",
    "support.message": "Message",
    "support.send": "Send Ticket",
    "support.track": "Track Tickets",
    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "What services does the platform provide?",
    "faq.a1": "We provide academic guidance, code review, 1:1 tutoring, workshops, and educational templates — all aimed at enhancing your learning.",
    "faq.q2": "Can I submit the work provided as my own?",
    "faq.a2": "No. All materials and sessions are for learning purposes only. You must complete your own work using the knowledge gained.",
    "faq.q3": "How do I book a mentorship session?",
    "faq.a3": "Navigate to the Services page, select your desired service, choose a package, and book through the booking form.",
    "faq.q4": "What payment methods are accepted?",
    "faq.a4": "Currently we support mock payment. Real payment integration will be added soon.",
    "faq.q5": "Can I request a specific mentor?",
    "faq.a5": "Yes, you can choose your preferred mentor during the booking process based on their expertise and availability.",
    // Resources
    "resources.title": "Learning Resources",
    "resources.articles": "Articles",
    "resources.videos": "Videos",
    "resources.checklists": "Checklists",
    // Footer
    "footer.rights": "All rights reserved",
    "footer.policy": "Usage Policy & Ethics",
    "footer.educational": "Educational platform — all services are for learning purposes only",
    // Common
    "common.learnmore": "Learn More",
    "common.back": "Back",
    "common.close": "Close",
    "common.report": "Report",
    "common.rating": "Rating",
    "common.price": "Price",
    "common.duration": "Duration",
    "common.level": "Level",
    "common.beginner": "Beginner",
    "common.intermediate": "Intermediate",
    "common.advanced": "Advanced",
  },
  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.services": "خدمات الطلاب",
    "nav.workshops": "ورش العمل",
    "nav.templates": "مكتبة القوالب",
    "nav.mentors": "المرشدون",
    "nav.faq": "الأسئلة الشائعة",
    "nav.support": "الدعم",
    "nav.dashboard": "لوحة التحكم",
    // Hero
    "hero.title": "NAWAR_HASAN PRO",
    "hero.subtitle": "دعمك التعليمي والتقني بخبرة عالية",
    "hero.description": "نُمكّنك من التعلم، التطور، وإتمام مشروعك تحت إشراف مهني — مع احترام النزاهة الأكاديمية.",
    "hero.cta.services": "تصفّح الخدمات",
    "hero.cta.session": "احجز جلسة استشارية",
    "hero.cta.templates": "اطلع على القوالب التعليمية",
    // Features
    "features.title": "لماذا تختارنا",
    "features.reliability": "الموثوقية",
    "features.reliability.desc": "مرشدون محترفون ذوو خبرة أكاديمية وصناعية",
    "features.guidance": "التوجيه الأكاديمي",
    "features.guidance.desc": "إرشاد خطوة بخطوة للمشاريع وفق المعايير الأكاديمية",
    "features.code": "مراجعة الكود",
    "features.code.desc": "جلسات مراجعة كود مفصّلة مع تصحيح الأخطاء",
    "features.workshops": "ورش العمل",
    "features.workshops.desc": "ورش عمل مباشرة ومسجّلة على التقنيات الرائجة",
    // Services
    "services.title": "خدماتنا",
    "services.mentorship": "إرشاد مشاريع التخرج",
    "services.mentorship.desc": "إرشاد موجّه لمشاريع التخرج — استشاري وتعليمي فقط",
    "services.codereview": "مراجعة كود وتصحيح الأخطاء",
    "services.codereview.desc": "مراجعة خبيرة لأكوادك مع ملاحظات تفصيلية وتحسينات",
    "services.tutoring": "جلسات تعليمية فردية",
    "services.tutoring.desc": "جلسات تعليمية مخصّصة حسب احتياجاتك التعلمية",
    "services.environment": "إعداد بيئات التشغيل والنشر",
    "services.environment.desc": "مساعدة في إعداد بيئات التطوير وخطوط النشر",
    "services.workshops": "ورش عمل",
    "services.workshops.desc": "ورش عمل مباشرة ومسجّلة على التقنيات المطلوبة",
    "services.templates": "قوالب تعليمية",
    "services.templates.desc": "قوالب مشاريع تعليمية مع أدلة خطوة بخطوة",
    // Integrity
    "integrity.title": "سياسة النزاهة الأكاديمية",
    "integrity.text": "هذه المنصة لا تقدم أعمالًا قابلة للتسليم نيابة عن الطلاب. جميع الخدمات تعليمية واستشارية بطبيعتها، تهدف لتعزيز التعلم والالتزام بسياسات النزاهة الأكاديمية.",
    "integrity.confirm": "أؤكد أن هذا الاستخدام للتعلم وليس لتقديمه كعملي الشخصي",
    // Mentors
    "mentors.title": "المرشدون",
    "mentors.book": "احجز جلسة",
    "mentors.message": "أرسل رسالة",
    "mentors.reviews": "تقييم",
    "mentors.hourly": "/ساعة",
    "mentors.available": "المواعيد المتاحة",
    // Templates
    "templates.title": "القوالب التعليمية",
    "templates.download": "تحميل",
    "templates.preview": "معاينة",
    "templates.educational": "للاستخدام التعليمي فقط — لا للتسليم كعمل طالب",
    "templates.free": "مجاني",
    // Booking
    "booking.title": "احجز جلسة",
    "booking.name": "الاسم الكامل",
    "booking.university": "الجامعة / المؤسسة",
    "booking.major": "التخصص",
    "booking.level": "المستوى الدراسي",
    "booking.description": "صف مشروعك/مشكلتك (النقاط التعليمية)",
    "booking.language": "اللغة المفضلة",
    "booking.mentor": "المرشد المفضل",
    "booking.package": "اختر الباقة",
    "booking.date": "اختر التاريخ والوقت",
    "booking.submit": "إرسال الطلب",
    "booking.success": "تم إرسال الطلب بنجاح! رقم التذكرة #",
    // Packages
    "package.basic": "أساسي",
    "package.basic.desc": "جلسة استشارة ساعة واحدة",
    "package.standard": "قياسي",
    "package.standard.desc": "5 ساعات إرشاد مع تتبع المراحل",
    "package.premium": "متميز",
    "package.premium.desc": "10 ساعات إرشاد + مراجعتا كود + دعم ذو أولوية",
    // Dashboard
    "dashboard.title": "لوحة تحكم الطالب",
    "dashboard.orders": "طلباتي",
    "dashboard.sessions": "الجلسات المحجوزة",
    "dashboard.messages": "الرسائل",
    "dashboard.files": "ملفات المشروع",
    "dashboard.status.progress": "قيد التنفيذ",
    "dashboard.status.waiting": "بانتظار الطالب",
    "dashboard.status.completed": "مكتمل",
    // Support
    "support.title": "الدعم والتذاكر",
    "support.new": "تذكرة جديدة",
    "support.subject": "الموضوع",
    "support.message": "الرسالة",
    "support.send": "إرسال التذكرة",
    "support.track": "تتبع التذاكر",
    // FAQ
    "faq.title": "الأسئلة الشائعة",
    "faq.q1": "ما الخدمات التي تقدمها المنصة؟",
    "faq.a1": "نقدم التوجيه الأكاديمي، مراجعة الكود، جلسات تعليمية فردية، ورش عمل، وقوالب تعليمية — جميعها تهدف لتعزيز تعلمك.",
    "faq.q2": "هل يمكنني تقديم العمل المقدّم كعملي الشخصي؟",
    "faq.a2": "لا. جميع المواد والجلسات لأغراض تعليمية فقط. يجب عليك إكمال عملك بنفسك باستخدام المعرفة المكتسبة.",
    "faq.q3": "كيف أحجز جلسة إرشاد؟",
    "faq.a3": "انتقل إلى صفحة الخدمات، اختر الخدمة المطلوبة، اختر باقة، واحجز من خلال نموذج الحجز.",
    "faq.q4": "ما طرق الدفع المقبولة؟",
    "faq.a4": "حاليًا ندعم الدفع التجريبي. سيتم إضافة بوابة دفع حقيقية قريبًا.",
    "faq.q5": "هل يمكنني طلب مرشد معين؟",
    "faq.a5": "نعم، يمكنك اختيار مرشدك المفضل أثناء عملية الحجز بناءً على خبرته وتوافره.",
    // Resources
    "resources.title": "موارد تعليمية",
    "resources.articles": "مقالات",
    "resources.videos": "فيديوهات",
    "resources.checklists": "قوائم تحقق",
    // Footer
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.policy": "سياسة الاستخدام والأخلاقيات",
    "footer.educational": "منصة تعليمية — جميع الخدمات لأغراض تعليمية فقط",
    // Common
    "common.learnmore": "اعرف المزيد",
    "common.back": "رجوع",
    "common.close": "إغلاق",
    "common.report": "إبلاغ",
    "common.rating": "التقييم",
    "common.price": "السعر",
    "common.duration": "المدة",
    "common.level": "المستوى",
    "common.beginner": "مبتدئ",
    "common.intermediate": "متوسط",
    "common.advanced": "متقدم",
  },
}

type TranslationKey = keyof typeof translations.en

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey) => string
  dir: "rtl" | "ltr"
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ar")

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[locale]?.[key] ?? key
    },
    [locale]
  )

  const dir = locale === "ar" ? "rtl" : "ltr"

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error("useI18n must be used within I18nProvider")
  return context
}
