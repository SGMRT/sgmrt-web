"use client";

import { useEffect, useRef } from "react";

type Props = {
    appVersion?: string;
};

export default function AmplitudeBootstrap({ appVersion }: Props) {
    // 중복 init 방지
    const initedRef = useRef(false);

    useEffect(() => {
        if (initedRef.current) return;
        initedRef.current = true;

        (async () => {
            const amplitude = await import("@amplitude/analytics-browser");
            const { Types } = amplitude;
            if (
                typeof window === "undefined" ||
                typeof document === "undefined"
            )
                return;

            amplitude.init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!, {
                trackingOptions: {
                    ipAddress: false,
                    language: true,
                    platform: true,
                },
                identityStorage: "localStorage",
                autocapture: {
                    attribution: true,
                    pageViews: true,
                    sessions: true,
                    formInteractions: false,
                    fileDownloads: false,
                    elementInteractions: false,
                    frustrationInteractions: true,
                },
                appVersion,
                logLevel: Types.LogLevel.Warn,
            });
        })();
    }, [appVersion]);

    return null;
}
