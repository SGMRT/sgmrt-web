export const jsonLdSoftwareApp = ({
    appUrl,
    appStoreUrl,
    priceKRW = 0,
    instagramUrl,
}: {
    appUrl: string;
    appStoreUrl: string;
    priceKRW?: number;
    instagramUrl?: string; // optional
}) => {
    const json: any = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "고스트러너",
        applicationCategory: "MobileApplication",
        applicationSubCategory: "Sports",
        operatingSystem: "iOS",
        url: appUrl,
        installUrl: appStoreUrl,
        offers: {
            "@type": "Offer",
            price: priceKRW,
            priceCurrency: "KRW",
        },
    };

    // 소셜 계정 연결
    if (instagramUrl) {
        json.sameAs = [instagramUrl];
    }

    return json;
};
