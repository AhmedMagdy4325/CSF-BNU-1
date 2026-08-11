import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { newsData } from "../data/news";

const NewsPage = () => {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    const formatDate = date =>
        new Date(date).toLocaleDateString(isArabic ? "ar-EG" : "en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });

    return (
        <div dir={isArabic ? "rtl" : "ltr"} className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
            <section className="rounded-[32px] bg-[#10273d] px-6 py-12 text-white shadow-[0_30px_60px_rgba(16,39,61,0.18)] sm:px-8 lg:px-10">
                <div className={isArabic ? "text-right" : "text-left"}>
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-black tracking-[0.12em] text-[#14b6d8] uppercase">
                        {isArabic ? "أخبار الكلية" : "Faculty News"}
                    </span>
                    <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                        {isArabic ? "أحدث الأخبار والإنجازات" : "Latest news and achievements"}
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200">
                        {isArabic
                            ? "تابع آخر الأحداث الدراسيّة والأكاديمية والنشاطات التي تقدمها الكلية.":
                            "Follow the latest academic events, student achievements, and department updates."}
                    </p>
                </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
                {newsData.map(item => (
                    <article key={item.id} className="overflow-hidden rounded-[28px] border border-slate-200/70 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                        <div className="p-6">
                            <div className="mb-3 inline-flex rounded-full bg-[#eef4f9] px-3 py-1 text-xs font-black text-[#10273d]">
                                {item.category}
                            </div>
                            <h2 className="text-2xl font-black text-slate-900">{item.title[isArabic ? "ar" : "en"]}</h2>
                            <p className="mt-4 text-sm leading-7 text-slate-600">{item.summary[isArabic ? "ar" : "en"]}</p>
                        </div>
                        <div className="flex items-center justify-between gap-4 border-t border-slate-200/70 bg-slate-50 px-6 py-4">
                            <span className="text-sm text-slate-500">{formatDate(item.date)}</span>
                            <Link
                                to={`/news/${item.id}`}
                                className="inline-flex items-center gap-2 text-sm font-black text-[#10273d]"
                            >
                                <span>{isArabic ? "اقرأ المزيد" : "Read more"}</span>
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default NewsPage;
