"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";
import { useSectionViewOnce } from "@/hooks/useSectionViewOnce";

export default function LandingAnalytics() {
    // hero 섹션 50% 노출
    useSectionViewOnce("hero", 0.8);

    // problems 섹션 50% 노출
    useSectionViewOnce("problems", 0.8);

    // solutions 섹션 50% 노출
    useSectionViewOnce("solutions", 0.8);

    // why-different 섹션 50% 노출
    useSectionViewOnce("why-different", 0.8);

    // download 섹션 50% 노출
    useSectionViewOnce("download", 0.8);

    useEffect(() => {
        // CTA 버튼 (#download로 스크롤 이동)
        const cta = document.getElementById("cta-hero");
        const onCta = () =>
            track("cta_click", { location: "hero", target: "#download" });
        cta?.addEventListener("click", onCta);

        // 스토어 버튼 위임: data-store="app_store|google_play"
        const storeWrap = document.getElementById("store-buttons");
        const onStoreClick = (e: Event) => {
            const t = e.target as HTMLElement | null;
            const btn = t?.closest<HTMLElement>("[data-store]");
            if (btn) {
                const store = btn.dataset.store;
                track("store_button_click", {
                    store,
                    location: "download_section",
                });
            }
        };
        storeWrap?.addEventListener("click", onStoreClick);

        // 푸터 링크: data-link="privacy|terms|contact"
        const footer = document.getElementById("site-footer");
        const onFooterClick = (e: Event) => {
            const t = e.target as HTMLElement | null;
            const a = t?.closest<HTMLElement>("[data-link]");
            if (a) {
                track("footer_link_click", { link_key: a.dataset.link });
            }
        };
        footer?.addEventListener("click", onFooterClick);

        return () => {
            cta?.removeEventListener("click", onCta);
            storeWrap?.removeEventListener("click", onStoreClick);
            footer?.removeEventListener("click", onFooterClick);
        };
    }, []);

    return null;
}
