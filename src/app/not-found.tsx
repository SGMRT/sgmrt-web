export default function NotFound() {
    return (
        <main className="min-h-dvh grid place-items-center text-center p-8">
            <div>
                <h1 className="text-3xl font-bold">페이지를 찾을 수 없어요</h1>
                <p className="mt-2 text-white/70">
                    요청하신 경로가 존재하지 않습니다.
                </p>
                <a
                    href="/"
                    className="mt-6 inline-block rounded-xl bg-[#E2FF00] px-4 py-2 text-black font-semibold"
                >
                    홈으로
                </a>
            </div>
        </main>
    );
}
