const Loading = ({ size = 10, message }) => {
    const px = size >= 12 ? "w-12 h-12" : "w-10 h-10";
    return (
        <div className="flex flex-col items-center justify-center gap-4 p-6">
            <div className={`rounded-full border-4 border-t-[#14b6d8] border-slate-200 animate-spin ${px}`} />
            {message && <div className="text-sm text-slate-600">{message}</div>}
        </div>
    );
};

export default Loading;
