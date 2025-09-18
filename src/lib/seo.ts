export const baseOpenGraph = () => ({
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: "GhostRunner",
    description: "고스트와 함께 달리는 새로운 러닝 경험",
    siteName: "GhostRunner",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "GhostRunner" }],
});
