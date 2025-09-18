export const baseOpenGraph = () => ({
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: "GhostRunner — 고스트와 함께 달려라",
    description: "AI·과거 나·다른 러너와 실시간 경쟁",
    siteName: "GhostRunner",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "GhostRunner" }],
});
