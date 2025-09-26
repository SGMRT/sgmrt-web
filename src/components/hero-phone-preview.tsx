"use client";
import { motion } from "motion/react";
import Image from "next/image";

const HeroPhonePreview = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto h-[585px] w-[270px] rounded-[2.2rem] bg-black p-3 shadow-2xl overflow-hidden"
        >
            <div className="absolute inset-0 rounded-[2.2rem] pointer-events-none shadow-[0_0_60px_rgba(226,255,0,0.15)_inset]" />
            <div className="relative h-full w-full rounded-[1.7rem] overflow-hidden">
                <Image
                    src="/images/hero.png"
                    alt="고스트러너 앱 실행 화면"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/20 to-black/40 z-10" />
            <div className="absolute inset-0 rounded-[1.7rem] pointer-events-none z-10 shadow-[inset_0_0_40px_rgba(226,255,0,0.15)]" />
        </motion.div>
    );
};

export default HeroPhonePreview;
