import { ArrowUpRight, BookOpen, BrainCircuit, ChevronLeft, Cpu, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { departments } from "../data/departments";

const DepartmentsPage = () => {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    return (
        <div dir={isArabic ? "rtl" : "ltr"} className="mx-auto max-w-7xl space-y-14 px-4 py-12 sm:px-6 lg:px-8">
            <section className="rounded-4xl bg-[#0b1d2f] px-6 py-12 text-white shadow-[0_30px_60px_rgba(16,39,61,0.22)] sm:px-8 lg:px-10">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div className={isArabic ? "space-y-5 text-right" : "space-y-5 text-left"}>
                        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-black tracking-[0.12em] text-[#14b6d8] uppercase">
                            {isArabic ? "الأقسام" : "Departments"}
                        </span>
                        <h1 className="text-4xl font-black leading-tight sm:text-5xl">
                            {isArabic
                                ? "برامج أكاديمية متطورة تواكب سوق التقنية."
                                : "Academic programs designed for the future of technology."}
                        </h1>
                        <p className="max-w-xl text-base leading-8 text-slate-200">
                            {isArabic
                                ? "تقدم الكلية خمسة برامج علمية متكاملة 136 ساعة بسعر 80,000 جنيه، مع تدريب عملي ومحتوى حديث."
                                : "The faculty offers five complete 136-hour programs at 80,000 EGP, with hands-on training and modern content."}
                        </p>
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-[#11243b] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                { label: { ar: "البرامج", en: "Programs" }, value: "5" },
                                { label: { ar: "ساعات البرنامج", en: "Program hours" }, value: "136" },
                                { label: { ar: "التكلفة", en: "Program fee" }, value: "80,000" },
                                { label: { ar: "دعم أكاديمي", en: "Academic support" }, value: "24/7" },
                            ].map(item => (
                                <div
                                    key={item.label[isArabic ? "ar" : "en"]}
                                    className="rounded-3xl border border-white/10 bg-[#0d2437] p-5"
                                >
                                    <div className="text-2xl font-black text-[#d3a85f]">{item.value}</div>
                                    <div className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-300">
                                        {item.label[isArabic ? "ar" : "en"]}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
                {departments.map(department => (
                    <article
                        key={department.id}
                        className="rounded-4xl border border-slate-200/70 bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                    >
                        <div className="mb-6 flex items-start justify-between gap-4">
                            <div>
                                <div className="inline-flex rounded-full bg-[#eef4f9] px-3 py-1.5 text-xs font-black text-[#10273d]">
                                    {department.code}
                                </div>
                                <h2 className="mt-4 text-2xl font-black text-slate-900">
                                    {department.title[isArabic ? "ar" : "en"]}
                                </h2>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#10273d] text-white shadow-[0_10px_24px_rgba(16,39,61,0.15)]">
                                {department.icon === "brain" ? (
                                    <BrainCircuit className="h-6 w-6" />
                                ) : department.icon === "cpu" ? (
                                    <Cpu className="h-6 w-6" />
                                ) : department.icon === "lightbulb" ? (
                                    <Lightbulb className="h-6 w-6" />
                                ) : (
                                    <BookOpen className="h-6 w-6" />
                                )}
                            </div>
                        </div>

                        <p className="text-sm leading-7 text-slate-600">{department.summary[isArabic ? "ar" : "en"]}</p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-3xl bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                                {department.hours[isArabic ? "ar" : "en"]}
                            </div>
                            <div className="rounded-3xl bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                                {department.fees[isArabic ? "ar" : "en"]}
                            </div>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {department.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-[#eef4f9] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.08em] text-[#10273d]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5">
                            <span className="text-xs font-black uppercase tracking-[0.12em] text-[#0a9fc1]">
                                {isArabic ? "التفاصيل" : "Details"}
                            </span>
                            <Link
                                to={`/departments/${department.id}`}
                                className="inline-flex items-center gap-2 rounded-2xl bg-[#10273d] px-5 py-2.5 text-sm font-black text-white hover:bg-[#0f213a]"
                            >
                                <span>{isArabic ? "عرض القسم" : "View program"}</span>
                                <ChevronLeft className="h-4 w-4" />
                            </Link>
                        </div>
                    </article>
                ))}
            </section>

            <section className="rounded-4xl bg-linear-to-r from-[#10273d] to-[#14b6d8] p-6 text-white shadow-[0_30px_60px_rgba(16,39,61,0.14)] sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className={isArabic ? "text-right" : "text-left"}>
                        <p className="text-[11px] font-black tracking-[0.12em] text-cyan-100 uppercase">
                            {isArabic ? "استفسار" : "Inquiry"}
                        </p>
                        <h2 className="mt-2 text-3xl font-black">
                            {isArabic
                                ? "تواصل مع فريق الكلية لتعرف المزيد."
                                : "Contact the faculty team to learn more."}
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

export default DepartmentsPage;
