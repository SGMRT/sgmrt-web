import type { Metadata } from "next";
import LegalDoc from "../_components/LegalDoc";

export const metadata: Metadata = {
    title: "개인정보 처리방침 | GhostRunner",
    description:
        "GhostRunner의 개인정보 처리방침입니다. 수집 항목, 이용 목적, 보관 기간, 제3자 제공, 이용자 권리 등을 안내합니다.",
    alternates: { canonical: "/privacy" },
    robots: { index: true, follow: true },
};

export default async function PrivacyPage() {
    return (
        <LegalDoc
            file="privacy.md"
            title="개인정보 처리방침"
            canonical="/privacy"
            updatedAt="2025-09-18"
        />
    );
}
