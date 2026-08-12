import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = ({ className = "" }) => {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    const toggle = () => i18n.changeLanguage(isArabic ? "en" : "ar");

    return (
        <button
            onClick={toggle}
            className={`flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] font-extrabold text-[#10273d] hover:bg-slate-100 ${className}`}
            aria-label="Toggle language"
        >
            <Globe className="h-4 w-4 text-[#0a9fc1]" />
            <span className="text-[11px]">{isArabic ? "EN" : "AR"}</span>
        </button>
    );
};

export default LanguageSwitcher;
