"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const formatPace = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.round(sec % 60);
    return `${m}’${s.toString().padStart(2, "0")}”`;
};

const clamp = (v: number, min: number, max: number) =>
    Math.min(max, Math.max(min, v));

export default function RealtimeGap() {
    const [stats, setStats] = useState({
        distance: 1.45,
        pace: 495, // 8’15”
        cadence: 124,
        avgPace: 375, // 6’15”
        cal: 95,
        bpm: 0, // 초기 표시값
    });

    const [gap, setGap] = useState({
        distance: -1.45,
        pace: +375,
        cadence: -1.45,
    });

    // 값이 주기적으로 변함 (조금 더 빠르게: 1200ms)
    useEffect(() => {
        const interval = setInterval(() => {
            setGap({
                distance: Number((Math.random() * 0.5 - 0.25).toFixed(2)), // -0.25 ~ +0.25 km
                pace: Math.floor(Math.random() * 100 - 50), // -1분~+1분
                cadence: Number((Math.random() * 10 - 5).toFixed(1)), // ±5 spm
            });

            setStats((s) => ({
                ...s,
                distance: Number(
                    (s.distance + Math.random() * 0.05).toFixed(2)
                ),
                pace: s.pace + Math.floor(Math.random() * 10 - 5),
                cadence: clamp(
                    s.cadence + Math.floor(Math.random() * 3 - 1),
                    160,
                    190
                ), // 160~190 범위
                cal: s.cal + Math.floor(Math.random() * 2),
                bpm: clamp(
                    (s.bpm || 148) + Math.floor(Math.random() * 7 - 3),
                    130,
                    190
                ), // 130~190 범위
            }));
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    const tone = (v: number) =>
        v > 0 ? "text-[#00E26D]" : v < 0 ? "text-[#FF4D6D]" : "text-white/80";

    return (
        <div className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-6 text-center w-full max-w-md mx-auto font-sans">
            <div className="text-sm text-white/60 mb-4">실시간 격차</div>

            <div className="grid grid-cols-3 gap-3">
                {/* 거리 */}
                <div>
                    <div
                        className={`text-xs font-semibold ${tone(
                            gap.distance
                        )}`}
                    >
                        {gap.distance > 0 ? "+" : ""}
                        {gap.distance}km
                    </div>
                    <motion.div
                        key={stats.distance}
                        initial={{ opacity: 0.25, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-3xl font-bold"
                    >
                        {stats.distance}km
                    </motion.div>
                    <div className="text-xs text-white/50 mt-1">거리</div>
                </div>

                {/* 현재 페이스 */}
                <div>
                    <div className={`text-xs font-semibold ${tone(-gap.pace)}`}>
                        {gap.pace > 0 ? "+" : ""}
                        {formatPace(Math.abs(gap.pace))}
                    </div>
                    <motion.div
                        key={stats.pace}
                        initial={{ opacity: 0.25, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-3xl font-bold"
                    >
                        {formatPace(stats.pace)}
                    </motion.div>
                    <div className="text-xs text-white/50 mt-1">
                        현재 페이스
                    </div>
                </div>

                {/* 케이던스 */}
                <div>
                    <div
                        className={`text-xs font-semibold ${tone(gap.cadence)}`}
                    >
                        {gap.cadence > 0 ? "+" : ""}
                        {gap.cadence}spm
                    </div>
                    <motion.div
                        key={stats.cadence}
                        initial={{ opacity: 0.25, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-3xl font-bold"
                    >
                        {stats.cadence}spm
                    </motion.div>
                    <div className="text-xs text-white/50 mt-1">케이던스</div>
                </div>
            </div>

            {/* 하단 부가 정보 */}
            <div className="mt-5 grid grid-cols-3 gap-3">
                <div>
                    <div className="text-2xl font-bold">
                        {formatPace(stats.avgPace)}
                    </div>
                    <div className="text-xs text-white/50 mt-1">
                        평균 페이스
                    </div>
                </div>
                <div>
                    <div className="text-2xl font-bold">{stats.cal}kcal</div>
                    <div className="text-xs text-white/50 mt-1">칼로리</div>
                </div>
                <div>
                    <motion.div
                        key={stats.bpm}
                        initial={{ opacity: 0.25, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-2xl font-bold"
                    >
                        {stats.bpm || "--"}
                    </motion.div>
                    <div className="text-xs text-white/50 mt-1">BPM</div>
                </div>
            </div>
        </div>
    );
}
