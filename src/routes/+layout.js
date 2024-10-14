export function load({ url }) { // triggers every page load
    return {
        url: url.pathname,
    }
}