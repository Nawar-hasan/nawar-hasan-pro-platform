export const mentors = [
  {
    id: "m-001",
    name: { en: "Dr. Ahmad Ali", ar: "د. أحمد علي" },
    title: { en: "Senior Software Mentor", ar: "مُرشد برمجيات أول" },
    skills: ["Python", "Machine Learning", "Databases"],
    rating: 4.9,
    reviews_count: 120,
    hourly_rate: 25,
    available_slots: [
      "2026-02-09T10:00:00+01:00",
      "2026-02-09T14:00:00+01:00",
      "2026-02-10T09:00:00+01:00",
      "2026-02-10T16:00:00+01:00",
    ],
    bio: {
      en: "Experienced academic and industry software engineer with 10+ years in AI and database systems.",
      ar: "خبير أكاديمي وصناعي في هندسة البرمجيات مع خبرة تتجاوز 10 سنوات في الذكاء الاصطناعي وأنظمة قواعد البيانات.",
    },
    services: ["mentorship", "codereview", "tutoring"],
    avatar: "/images/mentor-1.jpg",
  },
  {
    id: "m-002",
    name: { en: "Eng. Sara Hassan", ar: "م. سارة حسن" },
    title: { en: "Full-Stack Developer & Mentor", ar: "مطوّرة متكاملة ومُرشدة" },
    skills: ["Flutter", "React", "Node.js", "Firebase"],
    rating: 4.8,
    reviews_count: 95,
    hourly_rate: 20,
    available_slots: [
      "2026-02-09T11:00:00+01:00",
      "2026-02-09T15:00:00+01:00",
      "2026-02-11T10:00:00+01:00",
    ],
    bio: {
      en: "Passionate full-stack developer specializing in mobile and web applications with a focus on educational projects.",
      ar: "مطوّرة متكاملة شغوفة متخصصة في تطبيقات الموبايل والويب مع التركيز على المشاريع التعليمية.",
    },
    services: ["mentorship", "codereview", "environment"],
    avatar: "/images/mentor-2.jpg",
  },
  {
    id: "m-003",
    name: { en: "Dr. Omar Khalid", ar: "د. عمر خالد" },
    title: { en: "Data Science Specialist", ar: "متخصص في علوم البيانات" },
    skills: ["Python", "R", "TensorFlow", "Data Analysis"],
    rating: 4.7,
    reviews_count: 78,
    hourly_rate: 30,
    available_slots: [
      "2026-02-10T08:00:00+01:00",
      "2026-02-10T13:00:00+01:00",
      "2026-02-12T10:00:00+01:00",
    ],
    bio: {
      en: "PhD in Computer Science with expertise in data science, machine learning, and statistical analysis.",
      ar: "دكتوراه في علوم الحاسوب مع خبرة في علوم البيانات والتعلم الآلي والتحليل الإحصائي.",
    },
    services: ["mentorship", "tutoring", "workshops"],
    avatar: "/images/mentor-3.jpg",
  },
]

export const templates = [
  {
    id: "tpl-001",
    title: { en: "Simple REST API Project (Node.js)", ar: "مشروع REST API بسيط (Node.js)" },
    level: "Beginner",
    price: 0,
    license: "educational",
    description: {
      en: "Step-by-step template to build a REST API, includes README and exercises.",
      ar: "قالب عملي لبناء REST API مع دليل وتعليمات تدريبية.",
    },
    files: ["starter.zip", "README.md", "assignments.pdf"],
    category: "Backend",
    tags: ["Node.js", "Express", "REST API"],
  },
  {
    id: "tpl-002",
    title: { en: "React Dashboard Starter", ar: "لوحة تحكم React للمبتدئين" },
    level: "Intermediate",
    price: 15,
    license: "educational",
    description: {
      en: "A complete React dashboard template with authentication flow and data visualization.",
      ar: "قالب لوحة تحكم React كامل مع تدفق المصادقة وتصور البيانات.",
    },
    files: ["starter.zip", "README.md", "exercises.pdf"],
    category: "Frontend",
    tags: ["React", "Dashboard", "Charts"],
  },
  {
    id: "tpl-003",
    title: { en: "Flutter Mobile App Template", ar: "قالب تطبيق Flutter للموبايل" },
    level: "Intermediate",
    price: 10,
    license: "educational",
    description: {
      en: "Mobile app template with state management, API integration, and UI patterns.",
      ar: "قالب تطبيق موبايل مع إدارة الحالة وتكامل API وأنماط واجهة المستخدم.",
    },
    files: ["starter.zip", "README.md", "guide.pdf"],
    category: "Mobile",
    tags: ["Flutter", "Dart", "Mobile"],
  },
  {
    id: "tpl-004",
    title: { en: "Machine Learning Project Starter (Python)", ar: "مشروع تعلم آلي للمبتدئين (Python)" },
    level: "Advanced",
    price: 20,
    license: "educational",
    description: {
      en: "End-to-end ML project template covering data preprocessing, model training, and evaluation.",
      ar: "قالب مشروع تعلم آلي شامل يغطي معالجة البيانات وتدريب النموذج والتقييم.",
    },
    files: ["starter.zip", "README.md", "notebook.ipynb", "datasets/"],
    category: "AI/ML",
    tags: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    id: "tpl-005",
    title: { en: "Database Design & SQL Practice", ar: "تصميم قواعد البيانات وتدريب SQL" },
    level: "Beginner",
    price: 0,
    license: "educational",
    description: {
      en: "Learn database design principles with practical SQL exercises and ERD diagrams.",
      ar: "تعلم مبادئ تصميم قواعد البيانات مع تمارين SQL عملية ومخططات ERD.",
    },
    files: ["exercises.sql", "README.md", "erd-diagrams.pdf"],
    category: "Database",
    tags: ["SQL", "MySQL", "Database Design"],
  },
  {
    id: "tpl-006",
    title: { en: "CI/CD Pipeline Setup Guide", ar: "دليل إعداد أنابيب CI/CD" },
    level: "Intermediate",
    price: 5,
    license: "educational",
    description: {
      en: "Step-by-step guide to set up continuous integration and deployment pipelines.",
      ar: "دليل خطوة بخطوة لإعداد أنابيب التكامل والنشر المستمر.",
    },
    files: ["starter.zip", "README.md", "config-examples/"],
    category: "DevOps",
    tags: ["Docker", "GitHub Actions", "CI/CD"],
  },
]

export const services = [
  {
    id: "mentorship",
    icon: "GraduationCap",
    packages: [
      { name: "basic", price: 25, duration: "1 hour" },
      { name: "standard", price: 100, duration: "5 hours" },
      { name: "premium", price: 180, duration: "10 hours" },
    ],
  },
  {
    id: "codereview",
    icon: "Code",
    packages: [
      { name: "basic", price: 15, duration: "1 review" },
      { name: "standard", price: 60, duration: "5 reviews" },
      { name: "premium", price: 100, duration: "10 reviews" },
    ],
  },
  {
    id: "tutoring",
    icon: "Users",
    packages: [
      { name: "basic", price: 20, duration: "1 hour" },
      { name: "standard", price: 85, duration: "5 hours" },
      { name: "premium", price: 150, duration: "10 hours" },
    ],
  },
  {
    id: "environment",
    icon: "Settings",
    packages: [
      { name: "basic", price: 30, duration: "1 setup" },
      { name: "standard", price: 50, duration: "Full setup" },
      { name: "premium", price: 80, duration: "Setup + support" },
    ],
  },
  {
    id: "workshops",
    icon: "Presentation",
    packages: [
      { name: "basic", price: 10, duration: "1 workshop" },
      { name: "standard", price: 40, duration: "5 workshops" },
      { name: "premium", price: 70, duration: "All access" },
    ],
  },
  {
    id: "templates",
    icon: "FileText",
    packages: [
      { name: "basic", price: 0, duration: "Free templates" },
      { name: "standard", price: 25, duration: "5 templates" },
      { name: "premium", price: 45, duration: "All templates" },
    ],
  },
]

export const mockOrders = [
  {
    id: "ORD-001",
    service: { en: "Project Mentorship", ar: "إرشاد مشروع التخرج" },
    mentor: { en: "Dr. Ahmad Ali", ar: "د. أحمد علي" },
    status: "progress",
    date: "2026-02-05",
    package: "standard",
  },
  {
    id: "ORD-002",
    service: { en: "Code Review", ar: "مراجعة كود" },
    mentor: { en: "Eng. Sara Hassan", ar: "م. سارة حسن" },
    status: "waiting",
    date: "2026-02-03",
    package: "basic",
  },
  {
    id: "ORD-003",
    service: { en: "1:1 Tutoring", ar: "جلسة تعليمية فردية" },
    mentor: { en: "Dr. Omar Khalid", ar: "د. عمر خالد" },
    status: "completed",
    date: "2026-01-28",
    package: "basic",
  },
]

export const mockTickets = [
  {
    id: "TKT-001",
    subject: { en: "Cannot access my booked session", ar: "لا أستطيع الوصول لجلستي المحجوزة" },
    status: "open",
    date: "2026-02-04",
  },
  {
    id: "TKT-002",
    subject: { en: "Request for session rescheduling", ar: "طلب إعادة جدولة الجلسة" },
    status: "resolved",
    date: "2026-02-01",
  },
]

export const resources = [
  {
    id: "res-001",
    type: "article",
    title: { en: "How to Choose Your Graduation Project Topic", ar: "كيفية اختيار موضوع مشروع التخرج" },
    description: {
      en: "A comprehensive guide to selecting the right topic for your graduation project.",
      ar: "دليل شامل لاختيار الموضوع المناسب لمشروع التخرج.",
    },
  },
  {
    id: "res-002",
    type: "article",
    title: { en: "Writing a Project Proposal", ar: "كتابة مقترح المشروع" },
    description: {
      en: "Step-by-step instructions for writing an effective project proposal.",
      ar: "تعليمات خطوة بخطوة لكتابة مقترح مشروع فعّال.",
    },
  },
  {
    id: "res-003",
    type: "video",
    title: { en: "Task Division Strategies", ar: "استراتيجيات تقسيم المهام" },
    description: {
      en: "Learn how to effectively divide tasks among team members.",
      ar: "تعلم كيفية تقسيم المهام بفعالية بين أعضاء الفريق.",
    },
  },
  {
    id: "res-004",
    type: "checklist",
    title: { en: "Graduation Project Checklist", ar: "قائمة تحقق مشروع التخرج" },
    description: {
      en: "Complete checklist covering all phases of a graduation project.",
      ar: "قائمة تحقق شاملة تغطي جميع مراحل مشروع التخرج.",
    },
  },
  {
    id: "res-005",
    type: "video",
    title: { en: "Testing and Debugging Guide", ar: "دليل الاختبار وتصحيح الأخطاء" },
    description: {
      en: "Best practices for testing your code and fixing common bugs.",
      ar: "أفضل الممارسات لاختبار أكوادك وإصلاح الأخطاء الشائعة.",
    },
  },
  {
    id: "res-006",
    type: "article",
    title: { en: "Documentation Best Practices", ar: "أفضل ممارسات التوثيق" },
    description: {
      en: "How to properly document your project for academic submission.",
      ar: "كيفية توثيق مشروعك بشكل صحيح للتقديم الأكاديمي.",
    },
  },
]
