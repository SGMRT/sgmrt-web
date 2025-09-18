import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import type { Components } from "react-markdown";

type Props = {
    file: string; // 예: "privacy.md"
    title: string; // 문서 제목
    canonical: string; // 예: "/privacy"
    updatedAt?: string; // "YYYY-MM-DD" (없으면 frontmatter/date 또는 표시 생략)
};

export default async function LegalDoc({
    file,
    title,
    canonical,
    updatedAt,
}: Props) {
    const filePath = path.join(process.cwd(), "public", "content", file);
    const raw = await fs.readFile(filePath, "utf-8");
    const { content, data } = matter(raw);

    const lastUpdated =
        updatedAt ?? (typeof data?.date === "string" ? data.date : undefined);

    const mdComponents: Components = {
        h2: ({ node, ...props }) => (
            <h2 className="mt-10 mb-3 flex items-center gap-2" {...props} />
        ),
        h3: ({ node, ...props }) => <h3 className="mt-8 mb-2" {...props} />,
        a: ({ node, ...props }) => (
            <a target="_self" rel="noopener noreferrer" {...props} />
        ),
        table: ({ node, ...props }) => (
            <div className="not-prose overflow-x-auto">
                <table className="w-full text-sm" {...props} />
            </div>
        ),
        code: ({ className, children, ...props }) => {
            return (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        },
    };

    return (
        <main className="min-h-screen bg-[#111111] text-white">
            <div className="mx-auto w-full max-w-3xl px-6 py-14 md:py-16">
                {/* 헤더 */}
                <header className="mb-8 md:mb-10">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        {title}
                    </h1>
                    {lastUpdated && (
                        <p className="text-white/60 mt-2 text-sm">
                            최종 업데이트:{" "}
                            <time dateTime={lastUpdated}>{lastUpdated}</time>
                        </p>
                    )}
                    <link rel="canonical" href={canonical} />
                </header>

                {/* 본문 */}
                <article
                    className={[
                        "prose prose-invert",
                        "prose-headings:scroll-mt-24",
                        "prose-headings:font-bold",
                        "prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl",
                        "prose-p:leading-7",
                        "prose-a:text-[#E2FF00] prose-a:no-underline hover:prose-a:underline",
                        "prose-strong:text-white",
                        "prose-blockquote:border-l-4 prose-blockquote:border-white/20 prose-blockquote:bg-white/[0.03] prose-blockquote:p-4",
                        "prose-code:text-[0.95em] prose-pre:bg-white/[0.05] prose-pre:border prose-pre:border-white/10",
                        "prose-li:marker:text-white/50",
                        "prose-table:overflow-x-auto prose-table:block",
                        "prose-th:border-b prose-td:border-b border-white/10",
                    ].join(" ")}
                >
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[
                            rehypeSlug,
                            [rehypeAutolinkHeadings, { behavior: "wrap" }],
                        ]}
                        components={mdComponents}
                    >
                        {content}
                    </ReactMarkdown>
                </article>
            </div>
        </main>
    );
}
