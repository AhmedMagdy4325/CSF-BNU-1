import { CalendarDays, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { events } from "../data/events";

const EventsPage = () => {
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
                        {isArabic ? "الفعاليات" : "Events"}
                    </span>
                    <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                        {isArabic ? "شارك في فعالياتنا القادمة" : "Join our upcoming events"}
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200">
                        {isArabic
                            ? "تعرّف على ورش العمل، المسابقات، والمعارض التي تنظمها الكلية خلال الفترة المقبلة.":
                            "Discover workshops, competitions, and expos hosted by the faculty in the near future."}
                    </p>
                </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-3">
                {events.map(event => (
                    <article key={event.id} className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                        <div className="mb-4 flex items-center justify-between gap-3">
                            <span className="rounded-full bg-[#eef4f9] px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#10273d]">
                                {event.type[isArabic ? "ar" : "en"]}
                            </span>
                            <div className="inline-flex items-center gap-2 rounded-2xl bg-[#f8fafc] px-3 py-1 text-xs font-bold text-slate-600">
                                <CalendarDays className="h-4 w-4" />
                                {formatDate(event.date)}
                            </div>
                        </div>
                        <h2 className="text-2xl font-black text-slate-900">{event.title[isArabic ? "ar" : "en"]}</h2>
                        <p className="mt-4 text-sm leading-7 text-slate-600">{event.summary[isArabic ? "ar" : "en"]}</p>
                        <div className="mt-6 flex items-center gap-2 text-sm font-bold text-slate-700">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location[isArabic ? "ar" : "en"]}</span>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default EventsPage;
