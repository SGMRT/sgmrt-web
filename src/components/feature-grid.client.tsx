"use client";

import FeatureCard from "@/components/feature-card";
import { Activity, Heart, Map, Timer, Trophy, Zap } from "lucide-react";

export default function FeatureGridClient() {
    return (
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
                icon={Map}
                title="코스 러닝"
                desc="다른 러너들의 실제 러닝 코스를 선택하고 그대로 달려요."
            />
            <FeatureCard
                icon={Activity}
                title="고스트 러닝"
                desc="AI, 과거의 나의 기록을 고스트로 소환해 실시간 경쟁하며 달려보세요"
            />
            <FeatureCard
                icon={Zap}
                title="실시간 데이터"
                desc="페이스, 케이던스, 고도, 칼로리를 실시간으로 추적하고 분석합니다"
            />
            <FeatureCard
                icon={Heart}
                title="몰입감"
                desc="소리·시각 피드백과 메트로놈 기반 페이스메이커로 완전한 몰입"
            />
        </div>
    );
}
