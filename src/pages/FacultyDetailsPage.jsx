import { ArrowLeft, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { facultyMembers } from "../data/faculty";

const FacultyDetailsPage = () => {
    const { id } = useParams();
    const { i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
    const faculty = facultyMembers.find(member => member.id === id);

    if (!faculty) {
        return (
            <div dir={isArabic ? "rtl" : "ltr"} className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl font-black text-slate-900">404</h1>
                <p className="mt-4 text-lg text-slate-600">{isArabic ? "لم يتم العثور على عضو هيئة التدريس" : "Faculty member not found."}</p>
                <div className="mt-8 flex justify-center gap-4">
                    <Link to="/faculty" className="rounded-2xl bg-[#10273d] px-6 py-3 text-white">
                        {isArabic ? "العودة للهيئة التدريسية" : "Back to faculty"}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div dir={isArabic ? "rtl" : "ltr"} className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
            <Link to="/faculty" className="inline-flex items-center gap-2 text-sm font-black text-[#10273d]">
                <ArrowLeft className="h-4 w-4" />
                <span>{isArabic ? "العودة للهيئة التدريسية" : "Back to faculty"}</span>
            </Link>

            <section className="rounded-[32px] bg-[#10273d] px-6 py-10 text-white shadow-[0_30px_60px_rgba(16,39,61,0.18)] sm:px-8 lg:px-10">
                <div className={isArabic ? "text-right" : "text-left"}>
                    <h1 className="text-4xl font-black leading-tight sm:text-5xl">{faculty.name[isArabic ? "ar" : "en"]}</h1>
                    <p className="mt-3 text-xl font-black text-slate-200">{faculty.role[isArabic ? "ar" : "en"]}</p>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200">{faculty.bio[isArabic ? "ar" : "en"]}</p>
                </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                    <h2 className="text-2xl font-black text-slate-900">{isArabic ? "أبحاث" : "Research"}</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{faculty.research[isArabic ? "ar" : "en"]}</p>
                </div>

                <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#14b6d8]">{isArabic ? "القسم" : "Department"}</p>
                            <p className="mt-2 text-lg font-black text-slate-900">{faculty.department[isArabic ? "ar" : "en"]}</p>
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                            <Mail className="h-5 w-5 text-[#14b6d8]" />
                            <a href={`mailto:${faculty.email}`} className="text-sm font-bold text-slate-800">
                                {faculty.email}
                            </a>
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                            <Phone className="h-5 w-5 text-[#14b6d8]" />
                            <span className="text-sm font-bold text-slate-800">{faculty.phone}</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FacultyDetailsPage;
