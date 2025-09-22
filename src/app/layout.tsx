// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { jsonLdSoftwareApp } from "@/lib/ldjson";
import { baseOpenGraph } from "@/lib/seo";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import AmplitudeBootstrap from "@/components/amplitude_bootstrap";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
    title: "GhostRunner",
    description:
        "AI·과거 나의 기록을 고스트로 소환해 실시간 경쟁하는 몰입형 러닝 앱",
    keywords: ["러닝", "고스트", "메트로놈", "페이스메이커", "코스"],
    alternates: { canonical: "/" },
    openGraph: baseOpenGraph(),
    twitter: {
        card: "summary_large_image",
        title: "GhostRunner",
        description: "고스트와 함께 달리는 새로운 러닝 경험",
    },
    icons: "/favicon.ico",
};

export const viewport: Viewport = {
    themeColor: "#111111",
    colorScheme: "dark",
    width: "device-width",
    initialScale: 1,
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const appVersion = process.env.NEXT_PUBLIC_APP_VERSION;

    return (
        <html lang="ko" className={inter.variable} suppressHydrationWarning>
            <head>
                {/* Preconnects */}
                {/* <link
                    rel="preconnect"
                    href="https://cdn.amplitude.com"
                    crossOrigin=""
                /> */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLdSoftwareApp()),
                    }}
                />
            </head>
            <body className="bg-[#111111] text-white">
                <AmplitudeBootstrap appVersion={appVersion} />
                {children}
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
