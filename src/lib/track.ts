let amp: typeof import("@amplitude/analytics-browser") | null = null;

export async function track(event: string, props?: Record<string, any>) {
    try {
        if (!amp) {
            amp = await import("@amplitude/analytics-browser");
        }
        amp.track(event, props);
    } catch {
        // no-op
    }
}
