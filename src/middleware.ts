import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const url = req.nextUrl;
    const res = NextResponse.next();
    const utmKeys = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
    ];
    utmKeys.forEach((k) => {
        const v = url.searchParams.get(k);
        if (v)
            res.cookies.set(k, v, {
                httpOnly: true,
                path: "/",
                maxAge: 60 * 60 * 24 * 30,
            });
    });
    return res;
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
