const Badge = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#E2FF00]/30 bg-[#1A1A1A] px-3 py-1 text-xs text-[#E2FF00]">
        {children}
    </span>
);

export { Badge };
