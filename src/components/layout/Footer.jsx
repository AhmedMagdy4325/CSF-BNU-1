import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    const quickLinks = [
        { label: { ar: "الرئيسية", en: "Home" }, path: "/" },
        { label: { ar: "عن الكلية", en: "About" }, path: "/about" },
        { label: { ar: "الأقسام", en: "Departments" }, path: "/departments" },
        { label: { ar: "الأخبار", en: "News" }, path: "/news" },
        { label: { ar: "تواصل معنا", en: "Contact" }, path: "/contact" },
    ];

    return (
        <footer className="relative mt-auto border-t border-slate-200 bg-[#10273d] text-slate-200">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#14b6d8] via-[#d3a85f] to-[#0a9fc1]" />

            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 p-2 ring-1 ring-white/10">
                                <img src={logo} alt="BNU Logo" className="h-full w-full object-contain" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black tracking-[0.18em] text-[#14b6d8] uppercase">BNU</p>
                                <h3 className="text-lg font-black text-white">
                                    {isArabic ? "كلية علوم الحاسب" : "Faculty of Computer Science"}
                                </h3>
                            </div>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-slate-300">
                            {isArabic
                                ? "نُعدّ جيلًا من المبدعين والمهندسين والباحثين قادرين على بناء حلول رقمية مؤثرة في المجتمع."
                                : "We prepare a generation of creators, engineers, and researchers capable of building impactful digital solutions for society."}
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-black text-white">
                            {isArabic ? "روابط سريعة" : "Quick Links"}
                        </h4>
                        <ul className="space-y-3 text-sm text-slate-300">
                            {quickLinks.map(link => (
                                <li key={link.path}>
                                    <Link to={link.path} className="inline-flex items-center gap-2 hover:text-white">
                                        <ArrowUpRight className="h-4 w-4 text-[#d3a85f]" />
                                        {link.label[isArabic ? "ar" : "en"]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-black text-white">{isArabic ? "تواصل معنا" : "Contact Us"}</h4>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 text-[#d3a85f]" />
                                <span>Entertainment District - Main Axis of Obour City - Obour City</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-[#d3a85f]" />
                                <a href="mailto:info@cs.bnu.edu.eg" className="hover:text-white">
                                    info@cs.bnu.edu.eg
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-5 text-sm text-slate-400">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <p>
                            {isArabic
                                ? "© 2026 كلية علوم الحاسب - جامعة بنها الأهلية."
                                : "© 2026 Faculty of Computer Science - Benha National University."}
                        </p>
                        <p>{isArabic ? "جميع الحقوق محفوظة" : "All rights reserved"}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
