export const jsonLdSoftwareApp = () => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GhostRunner",
    applicationCategory: "SportsApplication",
    operatingSystem: "iOS",
    offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "0.0",
        reviewCount: "0",
    },
});
