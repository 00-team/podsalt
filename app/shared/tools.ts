export function isIOS() {
    const ua = navigator.userAgent || navigator.vendor
    return /iphone|ipad|ipod/i.test(ua)
}

export function isAndroidOrOther() {
    const ua = navigator.userAgent || navigator.vendor
    const isAndroidOrMobileUA = /android|opera mini|iemobile|mobile/i.test(ua)
    const isSmallScreen = window.matchMedia('(max-width: 768px)').matches

    return isAndroidOrMobileUA || isSmallScreen
}

export function isMobile() {
    return isIOS() || isAndroidOrOther()
}
