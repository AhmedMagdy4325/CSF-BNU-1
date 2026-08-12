import { Link } from "react-router-dom";

const EmptyState = ({ title, description, cta }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200/70 bg-white p-8 text-center shadow-sm">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#eef4f9] text-[#10273d]">
                <svg className="h-10 w-10 text-[#0a9fc1]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 7v11a2 2 0 0 0 2 2h14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 3v4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 3v4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <h3 className="text-lg font-black text-slate-900">{title || "No items found"}</h3>
            <p className="max-w-xl text-sm text-slate-600">{description || "There are no items to show right now."}</p>
            {cta && (
                <Link
                    to={cta.href}
                    className="mt-3 inline-flex items-center rounded-2xl bg-[#14b6d8] px-5 py-2 text-sm font-black text-white"
                >
                    {cta.label}
                </Link>
            )}
        </div>
    );
};

export default EmptyState;
