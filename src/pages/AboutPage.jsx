import { ArrowLeft, BookOpen, BrainCircuit, Building2, ChevronLeft, Lightbulb, ShieldCheck, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AboutPage = () => {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    const stats = [
        { value: "+2500", label: { ar: "طالب وطالبة", en: "Students" }, icon: Users },
        { value: "15+", label: { ar: "معمل بحثي", en: "Research Labs" }, icon: Building2 },
        { value: "98%", label: { ar: "جاهزية سوق العمل", en: "Employability" }, icon: ShieldCheck },
        { value: "4", label: { ar: "برامج أكاديمية", en: "Academic Programs" }, icon: BookOpen },
    ];

    const pillars = [
        {
            icon: BrainCircuit,
            title: { ar: "التعليم القائم على الابتكار", en: "Innovation-led Education" },
            text: {
                ar: "نصمم التعليم ليغطي المهارات التطبيقية، التفكير النقدي، والقدرة على تحويل الفكرة إلى منتج فعلي.",
                en: "We design education around practical skills, critical thinking, and the ability to transform ideas into tangible products.",
            },
        },
        {
            icon: Lightbulb,
            title: { ar: "البحث العلمي", en: "Scientific Research" },
            text: {
                ar: "نعمل على تطوير المشاريع البحثية ودعم الباحثين والطلاب في مجالات الذكاء الاصطناعي، البيانات، وتقنية الأنظمة الذكية.",
                en: "We support research projects and student innovation in AI, data, and smart systems technologies.",
            },
        },
        {
            icon: ShieldCheck,
            title: { ar: "القيم والالتزام", en: "Values and Responsibility" },
            text: {
                ar: "نؤمن بمبدأ الجودة، النزاهة، والالتزام بتخريج كوادر قادرة على خدمة المجتمع ومواكبة سوق العمل.",
                en: "We believe in quality, integrity, and graduating professionals capable of serving society and meeting labor market demands.",
            },
        },
    ];

    const milestones = [
        {
            year: "2018",
            title: { ar: "بداية التأسيس", en: "Launch phase" },
            text: {
                ar: "بدأت الكلية في بناء منظومة تعليمية متكاملة تجمع بين العلوم الأساسية وتطبيقات الحاسب الحديثة.",
                en: "The faculty began building an integrated educational system that blends core sciences with modern computing applications.",
            },
        },
        {
            year: "2021",
            title: { ar: "توسعة البرامج", en: "Program expansion" },
            text: {
                ar: "تم تطوير تخصصات جديدة وتحديث المناهج بما يتناسب مع احتياجات سوق العمل الرقمي.",
                en: "New specializations were added and curricula updated to match digital labor market needs.",
            },
        },
        {
            year: "2026",
            title: { ar: "التميز والابتكار", en: "Excellence and innovation" },
            text: {
                ar: "تستمر الكلية في تعزيز البحث العلمي والتدريب العملي وفتح مجالات أوسع للابتكار.",
                en: "The faculty continues to strengthen scientific research, field training, and wider innovation opportunities.",
            },
        },
    ];

    return (
        <div dir={isArabic ? "rtl" : "ltr"} className="mx-auto max-w-7xl space-y-16 px-4 py-12 sm:px-6 lg:px-8">
            <section className="rounded-[32px] bg-[#10273d] px-6 py-12 text-white shadow-[0_30px_60px_rgba(16,39,61,0.18)] sm:px-8 lg:px-10">
                <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className={isArabic ? "space-y-6 text-right" : "space-y-6 text-left"}>
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black tracking-[0.12em] text-[#14b6d8] ">
                            {isArabic ? "عن الكلية" : "About the Faculty"}
                        </span>
                        <h1 className="text-4xl font-black leading-tight sm:text-5xl">
                            {isArabic
                                ? "كلية علوم الحاسب تُبني مستقبلًا رقميًا حقيقيًا."
                                : "The Faculty of Computer Science builds a real digital future."}
                        </h1>
                        <p className="max-w-xl text-base leading-8 text-slate-200">
                            {isArabic
                                ? "تسعى الكلية إلى تقديم تعليم متميز في مجالات الحوسبة والذكاء الاصطناعي والأنظمة الذكية، مع تبني البحث العلمي والتدريب العملي لإعداد جيل قادر على المنافسة محليًا وعالميًا."
                                : "The faculty aims to provide distinguished education in computing, artificial intelligence, and smart systems, while adopting scientific research and practical training to prepare a generation capable of competing locally and globally."}
                        </p>
                        <div className={isArabic ? "flex justify-end" : "flex justify-start"}>
                            <Link
                                to="/departments"
                                className="inline-flex items-center gap-2 rounded-2xl bg-[#14b6d8] px-6 py-3.5 text-base font-black text-white hover:bg-[#0a9fc1]"
                            >
                                <span>{isArabic ? "استكشف الأقسام" : "Explore Departments"}</span>
                                <ArrowLeft className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                        <div className="space-y-5">
                            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                <div>
                                    <p className="text-xm font-black tracking-[0.14em] text-[#14b6d8]">
                                        {isArabic ? "رسالتنا" : "Our Mission"}
                                    </p>
                                    <h2 className="mt-2 text-2xl font-black text-white">
                                        {isArabic ? "تعليم • بحث • تأثير" : "Education • Research • Impact"}
                                    </h2>
                                </div>
                                <div className="rounded-2xl bg-[#14b6d8]/15 p-3 text-[#14b6d8]">
                                    <BookOpen className="h-6 w-6" />
                                </div>
                            </div>

                            <p className="text-sm leading-8 text-slate-200">
                                {isArabic
                                    ? "نقدم بيئة تعليمية حديثة تدمج بين المعرفة النظرية، التطبيق العملي، والبحث العلمي لتخريج مهنيين قادرين على حل المشكلات التقنية في مجتمعاتهم."
                                    : "We provide a modern educational environment that integrates theoretical knowledge, practical application, and scientific research to graduate professionals capable of solving technical problems in their communities."}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map(item => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={item.label[isArabic ? "ar" : "en"]}
                            className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
                        >
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef4f9] text-[#10273d]">
                                <Icon className="h-6 w-6" />
                            </div>
                            <div className="text-3xl font-black text-slate-900">{item.value}</div>
                            <div className="mt-2 text-xs font-extrabold text-slate-600">
                                {item.label[isArabic ? "ar" : "en"]}
                            </div>
                        </div>
                    );
                })}
            </section>

            <section className="space-y-8">
                <div className="text-center">
                    <span className="inline-flex items-center rounded-full border border-[#14b6d8]/25 bg-[#14b6d8]/10 px-3 py-1.5 text-[11px] font-black tracking-[0.08em] text-[#10273d]">
                        {isArabic ? "محاورنا" : "Our Focus"}
                    </span>
                    <h2 className="mt-3 text-3xl font-black text-slate-900">
                        {isArabic ? "ماذا يميز الكلية؟" : "What makes the faculty unique?"}
                    </h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {pillars.map(item => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title[isArabic ? "ar" : "en"]}
                                className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10273d] text-white">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-xl font-black text-slate-900">
                                    {item.title[isArabic ? "ar" : "en"]}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {item.text[isArabic ? "ar" : "en"]}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="space-y-8">
                <div className="flex items-end justify-between border-b border-slate-200 pb-4">
                    <div>
                        <span className="inline-flex items-center rounded-full border border-[#14b6d8]/25 bg-[#14b6d8]/10 px-3 py-1.5 text-[11px] font-black tracking-[0.08em] text-[#10273d]">
                            {isArabic ? "رحلتنا" : "Our Journey"}
                        </span>
                        <h2 className="mt-3 text-3xl font-black text-slate-900">
                            {isArabic ? "محطات التميز" : "Milestones of excellence"}
                        </h2>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {milestones.map(item => (
                        <div
                            key={item.year}
                            className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
                        >
                            <div className="mb-4 inline-flex rounded-full bg-[#eef4f9] px-3 py-1.5 text-sm font-black text-[#10273d]">
                                {item.year}
                            </div>
                            <h3 className="text-xl font-black text-slate-900">{item.title[isArabic ? "ar" : "en"]}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{item.text[isArabic ? "ar" : "en"]}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="rounded-[32px] bg-gradient-to-r from-[#10273d] to-[#14b6d8] p-6 text-white shadow-[0_30px_60px_rgba(16,39,61,0.14)] sm:p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className={isArabic ? "text-right" : "text-left"}>
                        <p className="text-[11px] font-black tracking-[0.12em] text-cyan-100 uppercase">
                            {isArabic ? "انضم إلينا" : "Join us"}
                        </p>
                        <h2 className="mt-2 text-3xl font-black">
                            {isArabic
                                ? "ابدأ رحلتك في مجال التقنية والابتكار."
                                : "Start your journey in technology and innovation."}
                        </h2>
                    </div>

                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-base font-black text-[#10273d]"
                    >
                        <span>{isArabic ? "تواصل معنا" : "Contact us"}</span>
                        <ChevronLeft className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
