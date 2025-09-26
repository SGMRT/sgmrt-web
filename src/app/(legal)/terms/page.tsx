import type { Metadata } from "next";
import LegalDoc from "../_components/LegalDoc";

export const metadata: Metadata = {
    title: "이용약관 | 고스트러너",
    description:
        "고스트러너 서비스 이용약관입니다. 계정, 콘텐츠, 결제, 금지행위, 면책, 분쟁 해결 절차 등을 안내합니다.",
    alternates: { canonical: "/terms" },
    robots: { index: true, follow: true },
};

export default async function TermsPage() {
    return (
        <LegalDoc
            file="terms.md"
            title="이용약관"
            canonical="/terms"
            updatedAt="2025-09-18"
        />
    );
}
