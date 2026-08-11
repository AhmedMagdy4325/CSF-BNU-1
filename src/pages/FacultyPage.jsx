import { ArrowUpRight, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { facultyMembers } from "../data/faculty";

const FacultyPage = () => {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    return (
        <div dir={isArabic ? "rtl" : "ltr"} className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
            <section className="rounded-[32px] bg-[#10273d] px-6 py-12 text-white shadow-[0_30px_60px_rgba(16,39,61,0.18)] sm:px-8 lg:px-10">
                <div className={isArabic ? "text-right" : "text-left"}>
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-black tracking-[0.12em] text-[#14b6d8] uppercase">
                        {isArabic ? "الهيئة التدريسية" : "Faculty"}
                    </span>
                    <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                        {isArabic ? "قادة الأكاديمية والخبرة في التعليم" : "Academic leaders and teaching expertise"}
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200">
                        {isArabic
                            ? "التعرف على أعضاء هيئة التدريس المتخصصين في مجالات متنوعة من الحوسبة والذكاء الاصطناعي.":
                            "Meet the faculty members specialized in computing, artificial intelligence, and data science."}
                    </p>
                </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
                {facultyMembers.map(member => (
                    <article key={member.id} className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                        <div className="mb-4 flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef4f9] text-[#10273d]">
                                <Users className="h-6 w-6" />
                            </div>
                            <div>
                                <h2 className="text-xl font-black text-slate-900">{member.name[isArabic ? "ar" : "en"]}</h2>
                                <p className="text-sm text-slate-600">{member.role[isArabic ? "ar" : "en"]}</p>
                            </div>
                        </div>
                        <p className="text-sm leading-7 text-slate-600">{member.bio[isArabic ? "ar" : "en"]}</p>
                        <div className="mt-5 flex items-center justify-between">
                            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#14b6d8]">{member.department[isArabic ? "ar" : "en"]}</span>
                            <Link
                                to={`/faculty/${member.id}`}
                                className="inline-flex items-center gap-2 rounded-xl bg-[#10273d] px-4 py-2 text-sm font-black text-white hover:bg-[#0f213a]"
                            >
                                <span>{isArabic ? "عرض" : "View"}</span>
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default FacultyPage;
