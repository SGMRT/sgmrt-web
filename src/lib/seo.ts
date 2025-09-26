export const baseOpenGraph = () => ({
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: "고스트러너",
    description: "고스트와 함께 달리는 새로운 러닝 경험",
    siteName: "고스트러너",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "고스트러너" }],
});
