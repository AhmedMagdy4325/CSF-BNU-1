import {
    ArrowLeft,
    ArrowUpRight,
    Award,
    BookOpen,
    Building2,
    Calendar,
    ChevronLeft,
    Cpu,
    GraduationCap,
    Mail,
    Sparkles,
    Star,
    Terminal,
    Trophy,
    Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HomePage = () => {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
    const lang = isArabic ? "AR" : "EN";

    const stats = [
        { id: 1, number: "+2500", label: { AR: "طالب وطالبة", EN: "Students" }, icon: Users },
        { id: 2, number: "4", label: { AR: "برامج أكاديمية", EN: "Programs" }, icon: BookOpen },
        { id: 3, number: "+15", label: { AR: "معامل ذكية", EN: "Smart Labs" }, icon: Cpu },
        { id: 4, number: "98%", label: { AR: "جاهزية سوق العمل", EN: "Employability" }, icon: Award },
    ];

    const programs = [
        {
            code: "CS",
            title: { AR: "علوم الحاسب", EN: "Computer Science" },
            desc: {
                AR: "تعزيز مهارات الخوارزميات، نظم البيانات، والتفكير التحليلي لبناء تطبيقات ذات تأثير حقيقي.",
                EN: "Develop algorithmic thinking, data systems, and applied problem-solving for real-world technology.",
            },
        },
        {
            code: "AI",
            title: { AR: "الذكاء الاصطناعي", EN: "Artificial Intelligence" },
            desc: {
                AR: "مناهج متخصصة في تعلم الآلة، رؤية الحاسب، ومعالجة اللغة الطبيعية لتطوير حلول ذكية.",
                EN: "Focused modules in machine learning, computer vision, and natural language processing.",
            },
        },
        {
            code: "SE",
            title: { AR: "هندسة البرمجيات", EN: "Software Engineering" },
            desc: {
                AR: "تجهيز الطلاب لتصميم الأنظمة المعقدة وإدارة دورة حياة البرمجيات بكفاءة وجودة عالية.",
                EN: "Prepare students to architect robust systems and lead sustainable software delivery lifecycles.",
            },
        },
        {
            code: "DS",
            title: { AR: "علوم البيانات", EN: "Data Science" },
            desc: {
                AR: "تطوير مهارات تحليل البيانات والنماذج التنبؤية لدعم اتخاذ القرارات الذكية.",
                EN: "Develop skills in data analysis and predictive modeling to support intelligent decision-making.",
            },
        },
        {
            code: "CL",
            title: { AR: "اللغويات الحاسوبية", EN: "Computational Linguistics" },
            desc: {
                AR: "دمج الذكاء الاصطناعي ومعالجة اللغة لدعم الخدمات الرقمية في عالم متعدد اللغات.",
                EN: "Combine AI and language processing to support digital services across multilingual environments.",
            },
        },
    ];

    const highlights = [
        {
            title: { AR: "مناهج متطورة", EN: "Modern Curriculum" },
            desc: {
                AR: "تحديث مستمر للمحتوى الأكاديمي بما يواكب أحدث تقنيات الحوسبة والذكاء الاصطناعي.",
                EN: "Continuous curriculum updates aligned with the latest technologies in computing and artificial intelligence.",
            },
            icon: BookOpen,
        },
        {
            title: { AR: "خبرات عملية", EN: "Hands-on Experience" },
            desc: {
                AR: "فرص تدريبية داخل معامل وأبحاث ومشاريع كبرى تخدم سوق العمل الفعلي.",
                EN: "Professional training opportunities through labs, research, and real-world projects.",
            },
            icon: GraduationCap,
        },
        {
            title: { AR: "بيئة بحثية", EN: "Research Environment" },
            desc: {
                AR: "دعم وتوجيه الطلاب في المشاريع البحثية والابتكارات وبناء مجموعات صلبة في مجال التكنولوجيا.",
                EN: "Guidance and support for research projects, innovation, and technology-focused student teams.",
            },
            icon: Sparkles,
        },
    ];

    const news = [
        {
            id: 1,
            date: { AR: "10 أغسطس 2026", EN: "August 10, 2026" },
            category: { AR: "مسابقات", EN: "Competitions" },
            title: {
                AR: "فوز فريق الكلية بالمركز الأول في مسابقة البرمجة الجامعية ECPC",
                EN: "Faculty team wins first place in the ECPC university programming competition",
            },
            desc: {
                AR: "حقق طلاب الكلية إنجازًا مميزًا وأثبتوا وجودهم في المراحل الإقليمية والأعلى.",
                EN: "Students achieved a remarkable milestone and proved their presence in regional and higher-level stages.",
            },
        },
        {
            id: 2,
            date: { AR: "05 أغسطس 2026", EN: "August 5, 2026" },
            category: { AR: "شراكات", EN: "Partnerships" },
            title: {
                AR: "توقيع بروتوكول تعاون مع شركات ذكية لتدريب الطلاب على مشاريع حقيقية",
                EN: "Signing a cooperation protocol with smart companies to train students on real projects",
            },
            desc: {
                AR: "شراكة جديدة تفتح باب التدريب الميداني والمهارات العملية للطلبة في مجالات الذكاء الاصطناعي.",
                EN: "A new partnership opens the door to practical training and professional skills in AI-related fields.",
            },
        },
        {
            id: 3,
            date: { AR: "01 أغسطس 2026", EN: "August 1, 2026" },
            category: { AR: "أكاديمي", EN: "Academic" },
            title: {
                AR: "افتتاح باب التسجيل لمعامل الابتكار والأبحاث داخل الكلية",
                EN: "Registration opens for innovation and research labs inside the faculty",
            },
            desc: {
                AR: "إتاحة الفرصة للطلاب للمشاركة في مشروعات بحثية تطبيقية ومبادرات ابتكارية.",
                EN: "Students now have the opportunity to participate in applied research projects and innovation initiatives.",
            },
        },
    ];

    const hero = isArabic
        ? {
              badge: "جامعة بنها الأهلية • BNU",
              title: "كلية علوم الحاسب",
              highlight: "صنّاع المستقبل الرقمي",
              description:
                  "نُعِدّ الطلاب للتميز في مجالات البرمجة والذكاء الاصطناعي والأنظمة الذكية عبر بيئة تعليمية متكاملة تجمع بين الجودة الأكاديمية والابتكار العلمي والتدريب العملي.",
              ctaPrimary: "استكشف البرامج",
              ctaSecondary: "عن الكلية",
              statsChip1: "15+ معمل بحثي",
              statsChip2: "مسابقات وطنية",
              panelTitle: "مركز الابتكار",
              panelLabel1: "المعامل البحثية المتقدمة",
              panelValue1: "15+ معمل AI & IoT",
              panelLabel2: "التدريب والتطبيق",
              panelValue2: "شراكات مع الشركات",
              panelLabel3: "إتاحة فرص التوظيف",
              panelValue3: "دعم مهني مستمر",
              visionTitle: "رؤية الكلية",
              visionText: "بناء جيل مبدع قادر على تحويل المعرفة إلى حلول رقمية ذات أثر مجتمعي.",
              sectionTag1: "تميز",
              sectionTag2: "التخصصات",
              sectionTag3: "أحدث الأخبار",
              whyTitle: "لماذا كلية علوم الحاسب؟",
              programTitle: "البرامج الأكاديمية",
              newsTitle: "الأخبار والفعاليات",
              learnMore: "اعرف المزيد",
              viewAll: "عرض الأقسام",
              details: "التفاصيل",
              readMore: "قراءة الخبر",
              joinTitle: "انضم إلى مجتمع الابتكار",
              joinText: "ابدأ مسارك في مجال التقنية والذكاء الاصطناعي",
              contact: "تواصل معنا",
              programsBtn: "البرامج",
          }
        : {
              badge: "Benha National University • BNU",
              title: "Faculty of Computer Science",
              highlight: "Builders of the digital future",
              description:
                  "We prepare students to excel in software development, artificial intelligence, and smart systems through an integrated academic environment that combines quality, scientific innovation, and practical training.",
              ctaPrimary: "Explore Programs",
              ctaSecondary: "About the Faculty",
              statsChip1: "15+ research labs",
              statsChip2: "National competitions",
              panelTitle: "Innovation Center",
              panelLabel1: "Advanced Research Labs",
              panelValue1: "15+ AI & IoT labs",
              panelLabel2: "Training & Application",
              panelValue2: "Industry partnerships",
              panelLabel3: "Career opportunities",
              panelValue3: "Ongoing professional support",
              visionTitle: "Faculty Vision",
              visionText:
                  "Building a creative generation capable of transforming knowledge into digital solutions with social impact.",
              sectionTag1: "Excellence",
              sectionTag2: "Specializations",
              sectionTag3: "Latest News",
              whyTitle: "Why Faculty of Computer Science?",
              programTitle: "Academic Programs",
              newsTitle: "News & Events",
              learnMore: "Learn more",
              viewAll: "View departments",
              details: "Details",
              readMore: "Read more",
              joinTitle: "Join the innovation community",
              joinText: "Start your path in technology and artificial intelligence",
              contact: "Contact us",
              programsBtn: "Programs",
          };

    return (
        <div dir={isArabic ? "rtl" : "ltr"} className="space-y-16 pb-16 md:space-y-20">
            <section className="relative overflow-hidden bg-[#10273d] text-white">
                <div className="absolute inset-0 bg-linear-to-br from-[#10273d] via-[#10273d]/90 to-[#0d1f33] opacity-95" />

                <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                    <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.85fr]">
                        <div className={isArabic ? "space-y-8 text-right" : "space-y-8 text-left"}>
                            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-black tracking-[0.18em] text-[#14b6d8] uppercase">
                                <Sparkles className="h-4 w-4 text-[#d3a85f]" />
                                <span>{hero.badge}</span>
                            </div>

                            <div className="space-y-6">
                                <h1 className="text-4xl font-black leading-[1.03] text-white sm:text-5xl lg:text-6xl">
                                    {hero.title}
                                    <span className="mt-3 block text-transparent bg-clip-text bg-linear-to-r from-[#14b6d8] via-cyan-200 to-sky-100 text-5xl sm:text-6xl">
                                        {hero.highlight}
                                    </span>
                                </h1>

                                <p className="max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                                    {hero.description}
                                </p>
                            </div>

                            <div
                                className={
                                    isArabic
                                        ? "flex flex-wrap justify-end gap-4 pt-4"
                                        : "flex flex-wrap justify-start gap-4 pt-4"
                                }
                            >
                                <Link
                                    to="/departments"
                                    className="inline-flex items-center gap-2 rounded-3xl bg-[#14b6d8] px-7 py-3.5 text-base font-black text-white shadow-[0_18px_35px_rgba(20,182,216,0.3)] hover:bg-[#0a9fc1]"
                                >
                                    <span>{hero.ctaPrimary}</span>
                                    <ArrowLeft className="h-5 w-5" />
                                </Link>
                                <Link
                                    to="/about"
                                    className="inline-flex items-center gap-2 rounded-3xl border border-white/20 bg-white/10 px-7 py-3.5 text-base font-black text-white hover:bg-white/15"
                                >
                                    <span>{hero.ctaSecondary}</span>
                                </Link>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 pt-4 text-sm text-slate-200">
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                                    <Terminal className="h-4 w-4 text-[#14b6d8]" />
                                    {hero.statsChip1}
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                                    <Trophy className="h-4 w-4 text-[#d3a85f]" />
                                    {hero.statsChip2}
                                </span>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_60px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:p-8">
                                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                                            {hero.panelTitle}
                                        </p>
                                        <h3 className="mt-3 text-2xl font-black text-white">CS BNU</h3>
                                    </div>
                                    <span className="rounded-full bg-[#d3a85f]/15 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#d3a85f]">
                                        {isArabic ? "متاح" : "Available"}
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { label: hero.panelLabel1, value: hero.panelValue1 },
                                        { label: hero.panelLabel2, value: hero.panelValue2 },
                                        { label: hero.panelLabel3, value: hero.panelValue3 },
                                    ].map(item => (
                                        <div
                                            key={item.label}
                                            className="flex items-center justify-between rounded-3xl border border-white/10 bg-[#10273d]/60 px-5 py-4"
                                        >
                                            <span className="text-sm font-semibold text-slate-300">{item.label}</span>
                                            <span className="text-sm font-black text-white">{item.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 rounded-[28px] border border-[#d3a85f]/20 bg-[#10273d]/50 p-5">
                                    <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#d3a85f]">
                                        {hero.visionTitle}
                                    </p>
                                    <p className="mt-3 text-sm leading-7 text-slate-200">{hero.visionText}</p>
                                </div>
                            </div>

                            <div className="pointer-events-none absolute -bottom-8 right-8 h-36 w-36 rounded-full bg-[#d3a85f]/10 blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
                <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map(item => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="rounded-4xl border border-slate-200/70 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                            >
                                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#eef4f9] text-[#10273d] ring-1 ring-slate-200">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div className="text-3xl font-black text-slate-900">{item.number}</div>
                                <p className="mt-3 text-sm font-semibold text-slate-600">{item.label[lang]}</p>
                            </div>
                        );
                    })}
                </section>

                <section className="space-y-8">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#14b6d8]/25 bg-[#14b6d8]/10 px-3 py-1.5 text-[11px] font-black tracking-[0.08em] uppercase text-[#10273d]">
                                {hero.sectionTag1}
                            </span>
                            <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">{hero.whyTitle}</h2>
                        </div>
                        <Link
                            to="/about"
                            className="hidden items-center gap-1 text-sm font-black text-[#10273d] md:inline-flex"
                        >
                            <span>{hero.learnMore}</span>
                            <ChevronLeft className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {highlights.map(item => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title[lang]}
                                    className="rounded-4xl border border-slate-200/70 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                                >
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-3xl bg-[#10273d] text-white">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900">{item.title[lang]}</h3>
                                    <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc[lang]}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section className="space-y-8">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#14b6d8]/25 bg-[#14b6d8]/10 px-3 py-1.5 text-[11px] font-black tracking-[0.08em] uppercase text-[#10273d]">
                                {hero.sectionTag2}
                            </span>
                            <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">{hero.programTitle}</h2>
                        </div>
                        <Link
                            to="/departments"
                            className="hidden items-center gap-1 text-sm font-black text-[#10273d] md:inline-flex"
                        >
                            <span>{hero.viewAll}</span>
                            <ChevronLeft className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {programs.map(program => (
                            <div
                                key={program.code}
                                className="rounded-4xl border border-slate-200/70 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                            >
                                <div className="mb-4 inline-flex rounded-full bg-[#eef4f9] px-3 py-1.5 text-xs font-black text-[#10273d]">
                                    {program.code}
                                </div>
                                <h3 className="text-xl font-black text-slate-900">{program.title[lang]}</h3>
                                <p className="mt-4 text-sm leading-7 text-slate-600">{program.desc[lang]}</p>
                                <Link
                                    to="/departments"
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#0a9fc1]"
                                >
                                    <span>{hero.details}</span>
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-8">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#14b6d8]/25 bg-[#14b6d8]/10 px-3 py-1.5 text-[11px] font-black tracking-[0.08em] uppercase text-[#10273d]">
                                {hero.sectionTag3}
                            </span>
                            <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">{hero.newsTitle}</h2>
                        </div>
                        <Link
                            to="/news"
                            className="hidden items-center gap-1 text-sm font-black text-[#10273d] md:inline-flex"
                        >
                            <span>{hero.viewAll}</span>
                            <ChevronLeft className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {news.map(item => (
                            <article
                                key={item.id}
                                className="overflow-hidden rounded-4xl border border-slate-200/70 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                            >
                                <div className="p-6">
                                    <div className="mb-4 flex items-center justify-between gap-3 text-xs font-bold text-slate-500">
                                        <span className="rounded-full bg-[#eef4f9] px-3 py-1 text-[#10273d]">
                                            {item.category[lang]}
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <Calendar className="h-3.5 w-3.5" />
                                            {item.date[lang]}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-black leading-7 text-slate-900">{item.title[lang]}</h3>
                                    <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc[lang]}</p>
                                </div>
                                <div className="border-t border-slate-200/70 bg-slate-50 px-6 py-4">
                                    <Link
                                        to="/news"
                                        className="inline-flex items-center gap-2 text-sm font-black text-[#10273d]"
                                    >
                                        <span>{hero.readMore}</span>
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="rounded-4xl bg-linear-to-r from-[#10273d] via-[#10273d] to-[#14b6d8] p-8 text-white shadow-[0_30px_60px_rgba(16,39,61,0.22)]">
                    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                        <div className={isArabic ? "space-y-4 text-right" : "space-y-4 text-left"}>
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[11px] font-black tracking-[0.12em] uppercase text-cyan-100">
                                <Star className="h-3.5 w-3.5 text-[#d3a85f]" />
                                {hero.joinTitle}
                            </span>
                            <h2 className="text-3xl font-black text-white sm:text-4xl">{hero.joinText}</h2>
                        </div>
                        <div
                            className={
                                isArabic
                                    ? "flex flex-col gap-3 sm:flex-row sm:justify-end"
                                    : "flex flex-col gap-3 sm:flex-row sm:justify-start"
                            }
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-3xl bg-white px-6 py-3.5 text-base font-black text-[#10273d]"
                            >
                                <Mail className="h-4 w-4" />
                                {hero.contact}
                            </Link>
                            <Link
                                to="/programs"
                                className="inline-flex items-center justify-center gap-2 rounded-3xl border border-white/20 bg-white/10 px-6 py-3.5 text-base font-black text-white hover:bg-white/20"
                            >
                                <Building2 className="h-4 w-4" />
                                {hero.programsBtn}
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePage;
