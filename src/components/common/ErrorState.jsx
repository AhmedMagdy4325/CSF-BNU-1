import { Link } from "react-router-dom";

const ErrorState = ({ title, description, retry }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-red-100 bg-white p-8 text-center shadow-sm">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-600">
                <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M12 9v4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 17h.01" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <h3 className="text-lg font-black text-slate-900">{title || "Something went wrong"}</h3>
            <p className="max-w-xl text-sm text-slate-600">{description || "An error occurred while loading data."}</p>
            <div className="flex gap-3">
                {retry && (
                    <button
                        onClick={retry}
                        className="inline-flex items-center rounded-2xl border border-slate-200 px-4 py-2 text-sm font-bold text-[#10273d]"
                    >
                        Retry
                    </button>
                )}
                <Link
                    to="/"
                    className="inline-flex items-center rounded-2xl bg-[#14b6d8] px-4 py-2 text-sm font-black text-white"
                >
                    Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorState;
