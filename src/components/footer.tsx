import Image from "next/image";
import Section from "./section";

const Footer = () => (
    <footer id="site-footer" className="mt-14 py-10 border-t border-white/5">
        <Section className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                <Image
                    className="h-6 w-6 rounded-lg"
                    src="/images/icon.png"
                    alt="GhostRunner Icon"
                    width={24}
                    height={24}
                />
                <span className="text-sm text-white/70">
                    © {new Date().getFullYear()} GhostRunner
                </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/60">
                <a
                    href="privacy"
                    className="hover:text-white"
                    data-link="privacy"
                >
                    개인정보 처리방침
                </a>
                <a href="terms" className="hover:text-white" data-link="terms">
                    이용약관
                </a>
                {/* mailto */}
                <a
                    href="mailto:sogogimalatang@gmail.com"
                    data-link="contact"
                    className="hover:text-white"
                >
                    문의: sogogimalatang@gmail.com
                </a>
            </div>
        </Section>
    </footer>
);

export default Footer;
