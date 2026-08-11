import { ArrowLeft, Home } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    return (
        <div dir={isArabic ? "rtl" : "ltr"} className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
                <div className="grid gap-10 lg:grid-cols-[0.6fr_1fr] lg:items-center">
                    <div className="rounded-[28px] bg-[#10273d] p-10 text-white">
                        <p className="text-7xl font-black">404</p>
                        <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[#14b6d8]">
                            {isArabic ? "صفحة غير موجودة" : "Page not found"}
                        </p>
                    </div>
                    <div className={isArabic ? "text-right" : "text-left"}>
                        <h1 className="text-4xl font-black text-slate-900">
                            {isArabic ? "عذرًا، الصفحة التي تبحث عنها غير متاحة." : "Sorry, the page you are looking for is not available."}
                        </h1>
                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            {isArabic
                                ? "يمكنك العودة إلى الصفحة الرئيسية أو تصفح أقسامنا وبرامجنا الأكاديمية." 
                                : "You can return to the homepage or browse our departments and academic programs."}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 rounded-2xl bg-[#10273d] px-5 py-3 text-sm font-black text-white"
                            >
                                <Home className="h-4 w-4" />
                                <span>{isArabic ? "الرئيسية" : "Home"}</span>
                            </Link>
                            <Link
                                to="/departments"
                                className="inline-flex items-center gap-2 rounded-2xl border border-[#10273d] px-5 py-3 text-sm font-black text-[#10273d]"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                <span>{isArabic ? "الأقسام" : "Departments"}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
