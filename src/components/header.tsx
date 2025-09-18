import { ArrowRight } from "lucide-react";
import Section from "./section";
import Image from "next/image";

const Header = () => (
    <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#111111]/60 border-b border-white/5">
        <Section className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
                <Image
                    className="h-8 w-8 rounded-xl"
                    src="/images/icon.png"
                    alt="GhostRunner Icon"
                    width={24}
                    height={24}
                />
                <span className="font-bold tracking-tight">GhostRunner</span>
            </div>
        </Section>
    </nav>
);

export default Header;
