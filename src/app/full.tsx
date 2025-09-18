import React from "react";
import { motion } from "motion/react";
import { Play, ArrowRight, Map, Activity, Timer, Trophy } from "lucide-react";

// GhostRunner Landing (Preview)
// - TailwindCSS design
// - Dark theme (#111111) with neon lime accent (#E2FF00)
// - Sections: Hero, Problems, Features, Differentiators, Social Proof, CTA, Footer
// - Responsive & accessible

const Section = ({
    id,
    children,
    className = "",
}: {
    id?: string;
    children: React.ReactNode;
    className?: string;
}) => (
    <section id={id} className={`w-full max-w-6xl mx-auto px-6 ${className}`}>
        {children}
    </section>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#E2FF00]/30 bg-[#1A1A1A] px-3 py-1 text-xs text-[#E2FF00]">
        {children}
    </span>
);

const FeatureCard = ({
    icon: Icon,
    title,
    desc,
}: {
    icon: any;
    title: string;
    desc: string;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl bg-[#141414] p-6 border border-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:shadow-[0_0_0_1px_rgba(226,255,0,0.25)] hover:border-[#E2FF00]/30 transition-shadow"
    >
        <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#E2FF00]/10">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-white/70 mt-3 text-sm leading-6">{desc}</p>
    </motion.div>
);

const StoreButtons = () => (
    <div className="flex flex-wrap items-center gap-3">
        <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-white hover:bg-white/10 transition"
            aria-label="Download on the App Store"
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
            >
                <path d="M19.665 13.585c-.036-3.067 2.505-4.536 2.62-4.607-1.43-2.09-3.65-2.378-4.44-2.41-1.88-.19-3.667 1.1-4.62 1.1-.955 0-2.426-1.08-3.99-1.05-2.04.03-3.92 1.19-4.97 3.01-2.12 3.68-.54 9.1 1.52 12.08 1.01 1.45 2.2 3.08 3.77 3.02 1.52-.06 2.09-.97 3.92-.97 1.83 0 2.34.97 3.94.94 1.63-.03 2.66-1.47 3.66-2.94 1.15-1.68 1.63-3.33 1.66-3.41-.04-.02-3.19-1.23-3.24-4.76z" />
            </svg>
            <span className="text-sm font-medium">App Store</span>
        </a>
        <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-white hover:bg-white/10 transition"
            aria-label="Get it on Google Play"
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
            >
                <path d="M3.27 2.27L2 3.54v16.92l1.27 1.27 9.46-9.73L3.27 2.27zm11.57 3.7L11.2 9.61 13.6 12l4.25-2.24c1.08-.57 1.08-1.95 0-2.52l-3-1.57zM11.2 14.39l3.64 3.64 3-1.57c1.08-.57 1.08-1.95 0-2.52L13.6 12l-2.4 2.39z" />
            </svg>
            <span className="text-sm font-medium">Google Play</span>
        </a>
    </div>
);

export default function GhostRunnerLanding() {
    return (
        <div className="min-h-screen w-full bg-[#111111] text-white selection:bg-[#E2FF00] selection:text-black">
            {/* Nav */}
            <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#111111]/60 border-b border-white/5">
                <Section className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-xl bg-[#E2FF00]" />
                        <span className="font-bold tracking-tight">
                            GhostRunner
                        </span>
                    </div>
                    <div className="hidden sm:flex items-center gap-6 text-sm text-white/80">
                        <a href="#features" className="hover:text-white">
                            Features
                        </a>
                        <a href="#why" className="hover:text-white">
                            Why
                        </a>
                        <a href="#stories" className="hover:text-white">
                            Stories
                        </a>
                        <a href="#download" className="hover:text-white">
                            Download
                        </a>
                    </div>
                    <a
                        href="#download"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#E2FF00] px-4 py-2 text-black font-semibold"
                    >
                        Get the App <ArrowRight className="w-4 h-4" />
                    </a>
                </Section>
            </nav>

            {/* Hero */}
            <header className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(226,255,0,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(226,255,0,0.12),transparent_45%)]" />
                <Section className="py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <Badge>혼자가 아닌, 고스트와 함께</Badge>
                        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                            지금 달리면,{" "}
                            <span className="text-[#E2FF00]">어제의 나</span>와
                            경쟁한다
                        </h1>
                        <p className="mt-4 text-white/70 max-w-xl">
                            AI·나·다른 러너의 기록을 고스트로 소환해 실시간으로
                            겨룰 수 있는 몰입형 러닝 앱. 코스 추천부터
                            음성/메트로놈 피드백까지, 지루할 틈이 없어요.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a
                                href="#download"
                                className="inline-flex items-center gap-2 rounded-2xl bg-[#E2FF00] px-5 py-3 text-black font-semibold"
                            >
                                무료로 시작하기{" "}
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#demo"
                                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 text-white hover:bg-white/10"
                            >
                                <Play className="w-4 h-4" /> 영상으로 보기
                            </a>
                        </div>
                        <div className="mt-6 text-xs text-white/50">
                            VDOT 기반 AI 페이스메이커 · Mapbox 코스 내비게이션 ·
                            Live Activity
                        </div>
                    </div>

                    {/* Mocked phone preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative mx-auto h-[520px] w-[270px] rounded-[2.2rem] border border-white/10 bg-black p-3 shadow-2xl"
                    >
                        <div className="absolute inset-0 rounded-[2.2rem] pointer-events-none shadow-[0_0_60px_rgba(226,255,0,0.15)_inset]" />
                        <div className="h-full w-full rounded-[1.7rem] bg-gradient-to-b from-[#0f0f0f] to-black p-4">
                            <div className="text-xs text-white/50">
                                코스: 한강 러닝 5K
                            </div>
                            <div className="mt-3 h-44 rounded-xl bg-[linear-gradient(135deg,rgba(226,255,0,0.15),rgba(255,255,255,0.04))] relative overflow-hidden">
                                {/* Ghost trail */}
                                <div className="absolute inset-0">
                                    <svg
                                        viewBox="0 0 300 150"
                                        className="w-full h-full opacity-90"
                                    >
                                        <defs>
                                            <linearGradient
                                                id="grad"
                                                x1="0"
                                                y1="0"
                                                x2="1"
                                                y2="0"
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor="#E2FF00"
                                                />
                                                <stop
                                                    offset="100%"
                                                    stopColor="#A8FF00"
                                                />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="M10 120 C 60 10, 140 10, 190 120 S 280 140, 290 60"
                                            stroke="url(#grad)"
                                            strokeWidth="4"
                                            fill="none"
                                        />
                                        <circle
                                            cx="110"
                                            cy="70"
                                            r="6"
                                            fill="#E2FF00"
                                        />
                                        <circle
                                            cx="95"
                                            cy="78"
                                            r="5"
                                            fill="#FFFFFF"
                                        />
                                    </svg>
                                </div>
                                <div className="absolute right-3 top-3 text-[10px] text-black bg-[#E2FF00] px-2 py-1 rounded-full font-bold">
                                    GHOST -12m
                                </div>
                            </div>
                            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                                <div className="rounded-lg bg-white/5 p-2">
                                    <div className="text-xs text-white/60">
                                        페이스
                                    </div>
                                    <div className="font-bold">5'12"</div>
                                </div>
                                <div className="rounded-lg bg-white/5 p-2">
                                    <div className="text-xs text-white/60">
                                        케이던스
                                    </div>
                                    <div className="font-bold">176 spm</div>
                                </div>
                                <div className="rounded-lg bg-white/5 p-2">
                                    <div className="text-xs text-white/60">
                                        고도
                                    </div>
                                    <div className="font-bold">+42 m</div>
                                </div>
                            </div>
                            <div className="mt-4 rounded-xl bg-white/5 p-3 flex items-center justify-between">
                                <div>
                                    <div className="text-[10px] text-white/60">
                                        메트로놈
                                    </div>
                                    <div className="font-semibold">180 BPM</div>
                                </div>
                                <button className="rounded-lg bg-[#E2FF00] text-black text-xs font-bold px-3 py-2">
                                    SYNC
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </Section>
            </header>

            {/* Problems */}
            <Section className="py-16" id="problems">
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        "어디서 달릴지 고민",
                        "혼자 달리면 지루함",
                        "기록 관리 번거로움",
                    ].map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl bg-[#141414] p-6 border border-white/5"
                        >
                            <p className="text-white/80">{t}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Features */}
            <Section className="py-10" id="features">
                <div className="flex items-end justify-between">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        핵심 기능
                    </h2>
                    <Badge>몰입형 러닝 경험</Badge>
                </div>
                <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={Map}
                        title="코스 러닝"
                        desc="다른 러너의 실제 기록을 기반으로 코스를 선택하고 그대로 달려요. Mapbox로 정밀한 경로 안내."
                    />
                    <FeatureCard
                        icon={Activity}
                        title="고스트 러닝"
                        desc="AI/과거 나/다른 러너를 고스트로 소환해 실시간 격차(m)와 리더를 확인."
                    />
                    <FeatureCard
                        icon={Timer}
                        title="메트로놈 페이스메이커"
                        desc="케이던스·페이스에 맞춰 BPM을 조정, 음성/음 높낮이로 페이스 유지."
                    />
                    <FeatureCard
                        icon={Trophy}
                        title="세그먼트 경쟁"
                        desc="코스 구간별 기록 경쟁과 랭킹, 목표 달성 보상."
                    />
                    <FeatureCard
                        icon={Activity}
                        title="실시간 텔레메트리"
                        desc="페이스/케이던스/고도/칼로리/날씨, Live Activity와 위젯으로 즉시 확인."
                    />
                    <FeatureCard
                        icon={Map}
                        title="정확한 추적"
                        desc="Kalman 필터 기반 GPS/바로미터 융합으로 노이즈를 줄이고 더 정확하게."
                    />
                </div>
            </Section>

            {/* Why different */}
            <Section className="py-14" id="why">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Strava, NRC와 뭐가 다른가요?
                        </h2>
                        <p className="mt-4 text-white/70 leading-7">
                            우리는 기록의 사후 관리보다{" "}
                            <span className="text-[#E2FF00] font-semibold">
                                달리는 순간의 몰입
                            </span>
                            에 집중합니다. 고스트와의 실시간 경쟁, 소리/시각
                            피드백, 그리고 코스 몰입감이 핵심이에요.
                        </p>
                        <ul className="mt-6 space-y-2 text-white/80 list-disc list-inside">
                            <li>
                                고스트 시뮬레이션: 어제의 나 vs 오늘의 나 vs AI
                            </li>
                            <li>VDOT/목표 페이스 기반 페이스메이킹</li>
                            <li>세그먼트 중심의 동기부여 설계</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-white/5 bg-[#151515] p-6">
                        <div className="text-sm text-white/60">실시간 격차</div>
                        <div className="mt-2 h-44 rounded-xl bg-black/40 flex items-center justify-center">
                            <div className="text-3xl font-black tracking-tight">
                                <span className="text-[#E2FF00]">-12</span> m
                            </div>
                        </div>
                        <p className="mt-3 text-white/70 text-sm">
                            리더: GHOST · 페이스 5'12" · 케이던스 176
                        </p>
                    </div>
                </div>
            </Section>

            {/* Stories */}
            <Section className="py-14" id="stories">
                <div className="flex items-end justify-between">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        러너들의 후기
                    </h2>
                    <Badge>Beta 0.9</Badge>
                </div>
                <div className="mt-6 grid md:grid-cols-3 gap-6">
                    {[
                        {
                            name: "민수",
                            quote: "혼자 달릴 때보다 2배는 덜 지루해요. 고스트 추격이 중독적!",
                        },
                        {
                            name: "지영",
                            quote: "메트로놈이 페이스 유지에 큰 도움. 5K 기록이 40초 단축됐어요.",
                        },
                        {
                            name: "현우",
                            quote: "코스 추천이 진짜 유용. 동네 새 코스를 알게 됐어요.",
                        },
                    ].map((u, i) => (
                        <motion.figure
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl bg-[#141414] p-6 border border-white/5"
                        >
                            <blockquote className="text-white/80 leading-7">
                                “{u.quote}”
                            </blockquote>
                            <figcaption className="mt-4 text-sm text-white/60">
                                — {u.name}
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </Section>

            {/* Download CTA */}
            <Section className="py-16" id="download">
                <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(226,255,0,0.12),rgba(17,17,17,0.6))] p-8 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold">
                        지금 달릴 준비 됐나요?
                    </h2>
                    <p className="mt-3 text-white/70">
                        앱을 설치하고 첫 고스트와 경쟁을 시작하세요. 지루함은
                        두고 가도 돼요.
                    </p>
                    <div className="mt-6 flex justify-center">
                        <StoreButtons />
                    </div>
                    <p className="mt-3 text-xs text-white/50">
                        광고 캠페인 UTM·AppsFlyer/Branch 연동으로 설치 전환 추적
                    </p>
                </div>
            </Section>

            {/* Footer */}
            <footer className="mt-14 py-10 border-t border-white/5">
                <Section className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-lg bg-[#E2FF00]" />
                        <span className="text-sm text-white/70">
                            © {new Date().getFullYear()} GhostRunner
                        </span>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-white/60">
                        <a href="#" className="hover:text-white">
                            개인정보 처리방침
                        </a>
                        <a href="#" className="hover:text-white">
                            이용약관
                        </a>
                        <a href="#" className="hover:text-white">
                            문의: hello@ghost.run
                        </a>
                    </div>
                </Section>
            </footer>
        </div>
    );
}
