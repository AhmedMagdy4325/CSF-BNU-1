import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import LanguageSwitcher from "../common/LanguageSwitcher";

const Navbar = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const isArabic = i18n.language === "ar";

    const primaryLinks = [
        { path: "/", label: { ar: "الرئيسية", en: "Home" } },
        { path: "/about", label: { ar: "عن الكلية", en: "About" } },
        { path: "/departments", label: { ar: "الأقسام", en: "Departments" } },
        { path: "/programs", label: { ar: "البرامج", en: "Programs" } },
        { path: "/faculty", label: { ar: "هيئة التدريس", en: "Faculty" } },
    ];

    const dropdownLinks = [
        { path: "/services", label: { ar: "الخدمات", en: "Services" } },
        { path: "/news", label: { ar: "الأخبار", en: "News" } },
        { path: "/announcements", label: { ar: "الإعلانات", en: "Announcements" } },
        { path: "/events", label: { ar: "الفعاليات", en: "Events" } },
        { path: "/contact", label: { ar: "تواصل معنا", en: "Contact" } },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(16,39,61,0.06)]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between gap-4">
                    <Link to="/" className="flex items-center gap-3.5 group">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 p-1 shadow-sm ring-1 ring-slate-200 transition group-hover:scale-[1.03]">
                            <img src={logo} alt="BNU Logo" className="h-full w-full object-contain" />
                        </div>

                        <div
                            className={
                                isArabic
                                    ? "border-r border-slate-200 pr-3 text-right"
                                    : "border-l border-slate-200 pl-3 text-left"
                            }
                        >
                            <span className="block text-xs font-extrabold tracking-[0.18em] text-[#0a9fc1]">
                                {isArabic ? "جامعة بنها الأهلية" : "Benha National University"}
                            </span>
                            <span className="mt-1 block text-sm font-black text-slate-900 sm:text-base">
                                {isArabic ? "كلية علوم الحاسب" : "Faculty of Computer Science"}
                            </span>
                        </div>
                    </Link>

                    <nav className="hidden items-center gap-2 lg:flex">
                        {primaryLinks.map(link => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `rounded-xl px-3.5 py-2 text-sm font-bold transition ${
                                        isActive
                                            ? "bg-[#10273d] text-white shadow-lg shadow-slate-900/10"
                                            : "text-slate-600 hover:bg-slate-100 hover:text-[#10273d]"
                                    }`
                                }
                            >
                                {link.label[isArabic ? "ar" : "en"]}
                            </NavLink>
                        ))}

                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-100 hover:text-[#10273d]"
                            >
                                <span>{isArabic ? "المزيد" : "More"}</span>
                                <ChevronDown className={`h-4 w-4 transition ${isDropdownOpen ? "rotate-180" : ""}`} />
                            </button>

                            {isDropdownOpen && (
                                <div
                                    className="absolute right-0 top-full z-20 mt-3 w-52 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    {dropdownLinks.map(link => (
                                        <NavLink
                                            key={link.path}
                                            to={link.path}
                                            onClick={() => setIsDropdownOpen(false)}
                                            className={({ isActive }) =>
                                                `block rounded-xl px-3 py-2 text-sm font-bold transition ${
                                                    isActive
                                                        ? "bg-[#10273d] text-white"
                                                        : "text-slate-600 hover:bg-slate-100 hover:text-[#10273d]"
                                                }`
                                            }
                                        >
                                            {link.label[isArabic ? "ar" : "en"]}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>

                    <div className="flex items-center gap-2">
                        <a
                            href="mailto:info@cs.bnu.edu.eg"
                            className="hidden items-center gap-2 rounded-xl border border-[#14b6d8]/30 bg-[#eef4f9] px-3 py-2 text-xs font-bold text-[#10273d] md:flex"
                        >
                            <Phone className="h-3.5 w-3.5 text-[#0a9fc1]" />
                            <span>{isArabic ? "تواصل الآن" : "Contact"}</span>
                        </a>

                        <LanguageSwitcher />

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="rounded-xl bg-slate-100 p-2 text-slate-700 hover:bg-slate-200 lg:hidden"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="border-t border-slate-200 bg-white px-4 py-3 shadow-lg lg:hidden">
                    <div className="space-y-2">
                        {primaryLinks.map(link => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block rounded-lg px-3 py-2 text-sm font-bold ${
                                        isActive ? "bg-[#10273d] text-white" : "text-slate-600 hover:bg-slate-50"
                                    }`
                                }
                            >
                                {link.label[isArabic ? "ar" : "en"]}
                            </NavLink>
                        ))}

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-2">
                            <div className="mb-2 px-2 text-[10px] font-black tracking-[0.18em] text-slate-500 uppercase">
                                {isArabic ? "المزيد" : "More"}
                            </div>
                            <div className="space-y-1">
                                {dropdownLinks.map(link => (
                                    <NavLink
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `block rounded-lg px-3 py-2 text-sm font-bold ${
                                                isActive ? "bg-[#10273d] text-white" : "text-slate-600 hover:bg-white"
                                            }`
                                        }
                                    >
                                        {link.label[isArabic ? "ar" : "en"]}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
