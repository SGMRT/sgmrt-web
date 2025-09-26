// app/opengraph-image.tsx
import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    background: "#111",
                    color: "#E2FF00",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 72,
                }}
            >
                고스트러너
            </div>
        ),
        size
    );
}
