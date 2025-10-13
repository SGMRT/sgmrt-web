import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        formats: ["image/avif", "image/webp"],
    },
    turbopack: {
        root: path.resolve("./"), // 현재 프로젝트를 Turbopack 루트로 명시
    },
};

export default nextConfig;
