import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { newsData } from "../data/news";

const NewsDetailsPage = () => {
    const { id } = useParams();
    const { i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
    const newsItem = newsData.find(item => item.id === id);

    const formatDate = date =>
        new Date(date).toLocaleDateString(isArabic ? "ar-EG" : "en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

    if (!newsItem) {
        return (
            <div dir={isArabic ? "rtl" : "ltr"} className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl font-black text-slate-900">404</h1>
                <p className="mt-4 text-lg text-slate-600">
                    {isArabic ? "لم يتم العثور على الخبر" : "News item not found."}
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Link
                        to="/news"
                        className="rounded-2xl bg-[#10273d] px-6 py-3 text-white"
                    >
                        {isArabic ? "العودة للأخبار" : "Back to news"}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div dir={isArabic ? "rtl" : "ltr"} className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
            <Link to="/news" className="inline-flex items-center gap-2 text-sm font-black text-[#10273d]">
                <ArrowLeft className="h-4 w-4" />
                <span>{isArabic ? "العودة للأخبار" : "Back to news"}</span>
            </Link>

            <article className="overflow-hidden rounded-[32px] border border-slate-200/70 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
                <img src={newsItem.image} alt={newsItem.title[isArabic ? "ar" : "en"]} className="h-80 w-full object-cover" />
                <div className="p-10">
                    <div className="mb-4 inline-flex rounded-full bg-slate-100 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#10273d]">
                        {newsItem.category}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                        <span>{formatDate(newsItem.date)}</span>
                    </div>
                    <h1 className="mt-6 text-4xl font-black text-slate-900">
                        {newsItem.title[isArabic ? "ar" : "en"]}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-600">{newsItem.content[isArabic ? "ar" : "en"]}</p>
                </div>
            </article>
        </div>
    );
};

export default NewsDetailsPage;
