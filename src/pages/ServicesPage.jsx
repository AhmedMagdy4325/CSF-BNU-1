import { ArrowUpRight, BookOpen, Cpu, ShieldCheck, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { services } from "../data/services";

const ServicesPage = () => {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
    const iconMap = {
        training: BookOpen,
        research: Cpu,
        labs: ShieldCheck,
        career: Users,
    };

    return (
        <div dir={isArabic ? "rtl" : "ltr"} className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
            <section className="rounded-[32px] bg-[#10273d] px-6 py-12 text-white shadow-[0_30px_60px_rgba(16,39,61,0.18)] sm:px-8 lg:px-10">
                <div className={isArabic ? "text-right" : "text-left"}>
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-black tracking-[0.12em] text-[#14b6d8] uppercase">
                        {isArabic ? "الخدمات" : "Services"}
                    </span>
                    <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                        {isArabic ? "خدمات تدعم طلابنا وأبحاثنا" : "Services that support our students and research"}
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200">
                        {isArabic
                            ? "توفر الكلية خدمات تدريبية، بحثية، مختبرات متقدمة، ودعم مهني متكامل.":
                            "The faculty provides training, research support, advanced labs, and comprehensive career services."}
                    </p>
                </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
                {services.map(service => {
                    const Icon = iconMap[service.id] || BookOpen;
                    return (
                        <article key={service.id} className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                            <div className="mb-5 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4f9] text-[#10273d]">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h2 className="text-2xl font-black text-slate-900">{service.title[isArabic ? "ar" : "en"]}</h2>
                            </div>
                            <p className="text-sm leading-7 text-slate-600">{service.description[isArabic ? "ar" : "en"]}</p>
                        </article>
                    );
                })}
            </section>

            <section className="rounded-[32px] bg-gradient-to-r from-[#10273d] to-[#14b6d8] p-6 text-white shadow-[0_30px_60px_rgba(16,39,61,0.14)] sm:p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className={isArabic ? "text-right" : "text-left"}>
                        <p className="text-[11px] font-black tracking-[0.12em] text-cyan-100 uppercase">
                            {isArabic ? "هل تحتاج إلى مساعدة" : "Need support"}
                        </p>
                        <h2 className="mt-2 text-3xl font-black">
                            {isArabic ? "نسعد بالإجابة على استفساراتك المهنية." : "We’re happy to answer your professional inquiries."}
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

export default ServicesPage;
