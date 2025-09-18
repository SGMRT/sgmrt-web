import { cookies } from "next/headers";
const UTM_KEYS = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
] as const;

export async function persistUtm(searchParams: URLSearchParams) {
    const c = await cookies();
    UTM_KEYS.forEach((k) => {
        const v = searchParams.get(k);
        if (v)
            c.set(k, v, {
                httpOnly: true,
                path: "/",
                maxAge: 60 * 60 * 24 * 30,
            });
    });
}

export async function getUtmFromCookies() {
    const c = await cookies();
    return Object.fromEntries(UTM_KEYS.map((k) => [k, c.get(k)?.value ?? ""]));
}
