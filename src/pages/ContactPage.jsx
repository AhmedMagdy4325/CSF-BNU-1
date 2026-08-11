import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    return (
        <div dir={isArabic ? "rtl" : "ltr"} className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <section className="rounded-[32px] bg-[#10273d] px-6 py-12 text-white shadow-[0_30px_60px_rgba(16,39,61,0.18)] sm:px-8 lg:px-10">
                <div className={isArabic ? "text-right" : "text-left"}>
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-black tracking-[0.12em] text-[#14b6d8] uppercase">
                        {isArabic ? "تواصل" : "Contact"}
                    </span>
                    <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                        {isArabic ? "نحن هنا لخدمتك" : "We are here to help"}
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200">
                        {isArabic
                            ? "يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني أو زيارة الكلية مباشرة.":
                            "Reach out by phone, email, or visit the faculty in person."}
                    </p>
                </div>
            </section>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                    <h2 className="text-2xl font-black text-slate-900">{isArabic ? "معلومات الاتصال" : "Contact information"}</h2>
                    <div className="mt-8 space-y-5">
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4f9] text-[#10273d]">
                                <Phone className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-black text-slate-900">{isArabic ? "الهاتف" : "Phone"}</p>
                                <a href="tel:+201001234567" className="text-sm text-slate-600">+20 100 123 4567</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4f9] text-[#10273d]">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-black text-slate-900">{isArabic ? "البريد الإلكتروني" : "Email"}</p>
                                <a href="mailto:info@faculty.edu" className="text-sm text-slate-600">info@faculty.edu</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4f9] text-[#10273d]">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-black text-slate-900">{isArabic ? "العنوان" : "Address"}</p>
                                <p className="text-sm text-slate-600">{isArabic ? "المدينة التعليمية، القاهرة، مصر" : "Education City, Cairo, Egypt"}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                    <h2 className="text-2xl font-black text-slate-900">{isArabic ? "ارسل رسالة" : "Send a message"}</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                        {isArabic
                            ? "استخدم النموذج التالي لوضع استفسارك، وسنعاود الاتصال بك قريبًا."
                            : "Use the form below to send your inquiry, and we will get back to you soon."}
                    </p>

                    <form className="mt-8 space-y-4">
                        <div>
                            <label className="mb-2 block text-sm font-bold text-slate-900">{isArabic ? "الاسم" : "Name"}</label>
                            <input
                                type="text"
                                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#14b6d8]"
                                placeholder={isArabic ? "اكتب اسمك" : "Enter your name"}
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-bold text-slate-900">Email</label>
                            <input
                                type="email"
                                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#14b6d8]"
                                placeholder={isArabic ? "اكتب البريد الإلكتروني" : "Enter your email"}
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-bold text-slate-900">{isArabic ? "رسالتك" : "Your message"}</label>
                            <textarea
                                rows="5"
                                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#14b6d8]"
                                placeholder={isArabic ? "اكتب استفسارك هنا" : "Write your inquiry here"}
                            />
                        </div>
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-3xl bg-[#10273d] px-6 py-3 text-sm font-black text-white hover:bg-[#0f213a]"
                        >
                            <Send className="h-4 w-4" />
                            <span>{isArabic ? "إرسال" : "Send"}</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
