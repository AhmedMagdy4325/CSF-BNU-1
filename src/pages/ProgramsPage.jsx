import { ArrowUpRight, BookOpen, BrainCircuit, Cpu, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { programs } from "../data/programs";

const ProgramsPage = () => {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
    const iconMap = {
        book: BookOpen,
        brain: BrainCircuit,
        cpu: Cpu,
        lightbulb: Lightbulb,
    };

    return (
        <div dir={isArabic ? "rtl" : "ltr"} className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
            <section className="rounded-4xl bg-[#10273d] px-6 py-12 text-white shadow-[0_30px_60px_rgba(16,39,61,0.18)] sm:px-8 lg:px-10">
                <div className={isArabic ? "text-right" : "text-left"}>
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-black tracking-[0.12em] text-[#14b6d8] uppercase">
                        {isArabic ? "البرامج" : "Programs"}
                    </span>
                    <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                        {isArabic
                            ? "برامج أكاديمية موجهة نحو سوق العمل والابتكار الرقمي."
                            : "Academic programs designed for the digital job market and innovation."}
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200">
                        {isArabic
                            ? "تقدم الكلية مسارات تعليمية متخصصة تركز على المهارات العملية، المشاريع التطبيقية، والتأهيل المهني في مجالات التقنية الحديثة."
                            : "The faculty offers specialized learning pathways that focus on practical skills, applied projects, and professional readiness in modern technology fields."}
                    </p>
                </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
                {programs.map(program => {
                    const Icon = iconMap[program.icon] || BookOpen;
                    return (
                        <article
                            key={program.id}
                            className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
                        >
                            <div className="mb-4 flex items-center justify-between gap-4">
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900">
                                        {program.title[isArabic ? "ar" : "en"]}
                                    </h2>
                                    <p className="mt-2 text-sm text-slate-600">
                                        {program.tagline[isArabic ? "ar" : "en"]}
                                    </p>
                                </div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4f9] text-[#10273d]">
                                    <Icon className="h-6 w-6" />
                                </div>
                            </div>

                            <p className="text-sm leading-7 text-slate-600">
                                {program.summary[isArabic ? "ar" : "en"]}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-700">
                                    {program.hours[isArabic ? "ar" : "en"]}
                                </span>
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-700">
                                    {program.fees[isArabic ? "ar" : "en"]}
                                </span>
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                                <span className="text-xs font-black uppercase tracking-[0.18em] text-[#14b6d8]">
                                    {isArabic ? "تفاصيل" : "Details"}
                                </span>
                                <Link
                                    to={`/departments/${program.id}`}
                                    className="inline-flex items-center gap-2 rounded-xl bg-[#10273d] px-4 py-2 text-sm font-black text-white hover:bg-[#0f213a]"
                                >
                                    <span>{isArabic ? "عرض" : "View"}</span>
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </article>
                    );
                })}
            </section>

            <section className="rounded-4xl bg-linear-to-r from-[#10273d] to-[#14b6d8] p-6 text-white shadow-[0_30px_60px_rgba(16,39,61,0.14)] sm:p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className={isArabic ? "text-right" : "text-left"}>
                        <p className="text-[11px] font-black tracking-[0.12em] text-cyan-100 uppercase">
                            {isArabic ? "أسئلة؟" : "Questions?"}
                        </p>
                        <h2 className="mt-2 text-3xl font-black">
                            {isArabic
                                ? "تواصل مع فريق القبول لمعرفة المزيد."
                                : "Contact our admissions team to learn more."}
                        </h2>
                    </div>

                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-base font-black text-[#10273d]"
                    >
                        <span>{isArabic ? "تواصل معنا" : "Contact us"}</span>
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ProgramsPage;
