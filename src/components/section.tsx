const Section = ({
    id,
    children,
    className = "",
}: {
    id?: string;
    children: React.ReactNode;
    className?: string;
}) => (
    <section id={id} className={`w-full max-w-6xl mx-auto px-6 ${className}`}>
        {children}
    </section>
);

export default Section;
