"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

export function useSectionViewOnce(sectionId: string, ratio = 0.5) {
    useEffect(() => {
        const el = document.getElementById(sectionId);
        if (!el) return;
        let fired = false;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (
                        !fired &&
                        e.isIntersecting &&
                        e.intersectionRatio >= ratio
                    ) {
                        fired = true;
                        track("section_view", { section_id: sectionId, ratio });
                    }
                });
            },
            { threshold: [ratio] }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [sectionId, ratio]);
}
