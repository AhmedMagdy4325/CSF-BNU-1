import { ArrowLeft, ArrowUpRight, BookOpen, BriefcaseBusiness, Clock, Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { departments } from "../data/departments";

const DepartmentDetailsPage = () => {
    const { id } = useParams();
    const { i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
    const department = departments.find(item => item.id === id) || departments[0];

    const overviewBlocks = [
        { title: { ar: "الهدف الاستراتيجي", en: "Strategic Goal" }, text: department.goal },
        { title: { ar: "المخرجات المتوقعة", en: "Expected Outcomes" }, text: department.outcomes },
        { title: { ar: "الخبرات التطبيقية", en: "Applied Experience" }, text: department.experience },
    ];

    return (
        <div dir={isArabic ? "rtl" : "ltr"} className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
            <Link
                to="/departments"
                className="inline-flex items-center gap-2 text-sm font-black text-[#10273d]"
            >
                <ArrowLeft className="h-4 w-4" />
                <span>{isArabic ? "العودة للأقسام" : "Back to departments"}</span>
            </Link>

            <section className="rounded-[32px] bg-[#10273d] px-6 py-10 text-white shadow-[0_30px_60px_rgba(16,39,61,0.18)] sm:px-8 lg:px-10">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                    <div className={isArabic ? "space-y-5 text-right" : "space-y-5 text-left"}>
                        <div className="inline-flex rounded-xl bg-white/10 px-3 py-1.5 text-xs font-black text-[#14b6d8]">
                            {department.code}
                        </div>
                        <h1 className="text-4xl font-black leading-tight sm:text-5xl">{department.title[isArabic ? "ar" : "en"]}</h1>
                        <p className="max-w-2xl text-base leading-8 text-slate-200">{department.summary[isArabic ? "ar" : "en"]}</p>
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                        <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl bg-[#0b1d2f] p-4">
                                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#14b6d8]/15 text-[#14b6d8]">
                                    <BookOpen className="h-5 w-5" />
                                </div>
                                <div className="text-xs font-bold text-slate-300">{isArabic ? "المحتوى" : "Content"}</div>
                                <div className="mt-1 text-sm font-black text-white">{department.content[isArabic ? "ar" : "en"]}</div>
                            </div>
                            <div className="rounded-2xl bg-[#0b1d2f] p-4">
                                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#14b6d8]/15 text-[#14b6d8]">
                                    <Clock className="h-5 w-5" />
                                </div>
                                <div className="text-xs font-bold text-slate-300">{isArabic ? "تفاصيل البرنامج" : "Program details"}</div>
                                <div className="mt-2 text-sm font-black text-white">{department.level[isArabic ? "ar" : "en"]}</div>
                                <div className="mt-3 text-xs tracking-[0.16em] text-slate-400">{isArabic ? "الساعات" : "Hours"}</div>
                                <div className="text-sm font-bold text-white">{department.hours[isArabic ? "ar" : "en"]}</div>
                                <div className="mt-3 text-xs tracking-[0.16em] text-slate-400">{isArabic ? "التكلفة" : "Cost"}</div>
                                <div className="text-sm font-bold text-white">{department.fees[isArabic ? "ar" : "en"]}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-3">
                {overviewBlocks.map(item => (
                    <div key={item.title[isArabic ? "ar" : "en"]} className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                        <h2 className="text-xl font-black text-slate-900">{item.title[isArabic ? "ar" : "en"]}</h2>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.text[isArabic ? "ar" : "en"]}</p>
                    </div>
                ))}
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                    <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef4f9] text-[#10273d]">
                            <Cpu className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900">{isArabic ? "المهارات والخبرات" : "Skills and experience"}</h2>
                    </div>

                    <ul className="space-y-3 text-sm leading-7 text-slate-600">
                        {department.skills.map(skill => (
                            <li key={skill} className="flex items-start gap-3">
                                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#14b6d8]" />
                                <span>{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                    <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef4f9] text-[#10273d]">
                            <BriefcaseBusiness className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900">{isArabic ? "فرص العمل" : "Career paths"}</h2>
                    </div>

                    <ul className="space-y-3 text-sm leading-7 text-slate-600">
                        {department.careers.map(career => (
                            <li key={career} className="flex items-start gap-3">
                                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#d3a85f]" />
                                <span>{career}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="rounded-[32px] bg-gradient-to-r from-[#10273d] to-[#14b6d8] p-6 text-white shadow-[0_30px_60px_rgba(16,39,61,0.14)] sm:p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className={isArabic ? "text-right" : "text-left"}>
                        <p className="text-[11px] font-black tracking-[0.12em] text-cyan-100 ">{isArabic ? "ابدأ الآن" : "Start now"}</p>
                        <h2 className="mt-2 text-3xl font-black">
                            {isArabic ? "تعرّف على الفرص الأكاديمية المتاحة في هذا القسم." : "Discover the academic opportunities offered by this program."}
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

export default DepartmentDetailsPage;
