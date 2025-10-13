import Section from "@/components/section";
import { Badge } from "@/components/badges";
import StoreButtons from "@/components/store-buttons";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FeatureGridClient from "@/components/feature-grid.client";
import { ArrowRight, MapPin, Trophy, Users } from "lucide-react";
import HeroPhonePreview from "@/components/hero-phone-preview";
import LandingAnalytics from "@/components/landing-analytics.client";
import RealtimeGap from "@/components/realtime-gap";

export default function Page() {
    return (
        <div className="min-h-screen w-full bg-[#111111] text-white selection:bg-[#E2FF00] selection:text-black">
            <Header />
            <main id="main">
                <LandingAnalytics />
                <header id="hero" className="relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(226,255,0,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(226,255,0,0.12),transparent_45%)]" />
                    <Section className="py-16 md:py-28 grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <Badge>혼자가 아닌, 고스트와 함께</Badge>
                            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                                지금,{" "}
                                <span className="text-[#E2FF00]">
                                    어제의 나
                                </span>
                                와 경쟁한다
                            </h1>

                            <p className="mt-4 text-white/70 max-w-xl">
                                과거의 기록을 고스트로 소환해 실시간으로 겨룰 수
                                있는 몰입형 러닝 앱. <br />
                                코스 추천부터 음성/메트로놈 피드백까지, 지루할
                                틈이 없어요.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    id="cta-hero"
                                    href="#download"
                                    className="inline-flex items-center gap-2 rounded-2xl bg-[#E2FF00] px-5 py-3 text-black font-semibold"
                                >
                                    무료로 시작하기{" "}
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                {/* <a
                                    href="#demo"
                                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 text-white hover:bg-white/10"
                                >
                                    <Play className="w-4 h-4" /> 영상으로 보기
                                </a> */}
                            </div>
                            <div className="mt-6 text-xs text-white/50">
                                나와 AI, 그리고 다른 러너들의 기록과 함께 달리는
                                새로운 러닝 경험
                            </div>
                        </div>

                        {/* Mocked phone preview */}
                        <HeroPhonePreview />
                    </Section>
                </header>

                <section
                    id="problems"
                    aria-labelledby="problems-title"
                    className="py-16"
                >
                    <Section>
                        <h3
                            id="problems-title"
                            className="text-3xl md:text-4xl font-bold text-center mb-16 text-balance"
                        >
                            러너들이 겪는{" "}
                            <span className="text-[#E2FF00]">진짜 문제들</span>
                        </h3>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <div className="rounded-2xl bg-[#141414] border border-white/10 text-center p-8 hover:border-[#E2FF00]/30 hover:shadow-[0_0_0_1px_rgba(226,255,0,0.25)] transition">
                                <MapPin className="w-12 h-12 text-[#E2FF00] mx-auto mb-4" />
                                <h4 className="text-xl font-semibold mb-2">
                                    어디서 달릴지 고민된다
                                </h4>
                                <p className="text-white/70">
                                    매번 같은 코스만 반복하게 되는 지루함
                                </p>
                            </div>

                            <div className="rounded-2xl bg-[#141414] border border-white/10 text-center p-8 hover:border-[#E2FF00]/30 hover:shadow-[0_0_0_1px_rgba(226,255,0,0.25)] transition">
                                <Users className="w-12 h-12 text-[#E2FF00] mx-auto mb-4" />
                                <h4 className="text-xl font-semibold mb-2">
                                    혼자 달리면 지루하다
                                </h4>
                                <p className="text-white/70">
                                    동기부여 없이 포기하게 되는 순간들
                                </p>
                            </div>

                            <div className="rounded-2xl bg-[#141414] border border-white/10 text-center p-8 hover:border-[#E2FF00]/30 hover:shadow-[0_0_0_1px_rgba(226,255,0,0.25)] transition">
                                <Trophy className="w-12 h-12 text-[#E2FF00] mx-auto mb-4" />
                                <h4 className="text-xl font-semibold mb-2">
                                    내 기록 관리가 어렵다
                                </h4>
                                <p className="text-white/70">
                                    발전하고 있는지 알기 어려운 현실
                                </p>
                            </div>
                        </div>
                    </Section>
                </section>

                <section
                    id="solutions"
                    aria-labelledby="solutions-title"
                    className="py-16"
                >
                    <Section>
                        <div className="flex items-center justify-between">
                            <h2
                                id="solutions-title"
                                className="text-2xl md:text-3xl font-bold"
                            >
                                <span className="text-[#E2FF00]">
                                    고스트러너
                                </span>
                                가 제공하는 솔루션
                            </h2>
                            <Badge>몰입형 러닝 경험</Badge>
                        </div>
                        <FeatureGridClient />
                    </Section>
                </section>

                <section
                    id="why-different"
                    aria-labelledby="why-different-title"
                    className="py-16"
                >
                    <Section id="why-different">
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold">
                                    다른 러닝 앱과 뭐가 다른가요?
                                </h2>
                                <p className="mt-4 text-white/70 leading-7">
                                    우리는 기록의 사후 관리보다{" "}
                                    <span className="text-[#E2FF00] font-semibold">
                                        달리는 순간의 몰입
                                    </span>
                                    에 집중합니다. 고스트와의 실시간 경쟁,
                                    소리/시각 피드백, 그리고 코스 몰입감이
                                    핵심이에요.
                                </p>
                                <ul className="mt-6 space-y-2 text-white/80 list-disc list-inside">
                                    <li>
                                        고스트 시뮬레이션: 과거의 나 vs 오늘의
                                        나
                                    </li>
                                    <li>VDOT/목표 페이스 기반 페이스메이킹</li>
                                    <li>세그먼트 중심의 동기부여 설계</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-white/5 bg-[#151515] p-6">
                                <RealtimeGap />
                            </div>
                        </div>
                    </Section>
                </section>

                <section
                    id="download"
                    aria-labelledby="download-title"
                    className="py-16"
                >
                    <Section id="download">
                        <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(226,255,0,0.12),rgba(17,17,17,0.6))] p-8 md:p-12 text-center">
                            <h2
                                id="download-title"
                                className="text-3xl md:text-4xl font-extrabold"
                            >
                                지금 달릴 준비 됐나요?
                            </h2>
                            <p className="mt-3 text-white/70">
                                앱을 설치하고 첫 고스트와 경쟁을 시작하세요.
                            </p>
                            <div
                                id="store-buttons"
                                className="mt-6 flex justify-center"
                            >
                                <StoreButtons />
                            </div>
                            <p className="text-xs mt-3 text-white/30">
                                무료 다운로드 • 인앱 구매 없음
                            </p>
                        </div>
                    </Section>
                </section>
            </main>
            <Footer />
        </div>
    );
}
