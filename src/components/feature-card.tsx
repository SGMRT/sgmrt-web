"use client";
import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

const FeatureCard = ({
    icon: Icon,
    title,
    desc,
}: {
    icon: LucideIcon;
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

export default FeatureCard;
