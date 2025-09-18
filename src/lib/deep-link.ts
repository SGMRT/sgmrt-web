export function getInstallOrOpenLink(ua: string) {
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    if (isIOS) {
        return {
            open: "ghostrunner://open",
            store: "https://apps.apple.com/app/idXXXXXXXXX",
        };
    }
    return { open: "#", store: "/download" };
}
