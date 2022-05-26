import URL from 'url-parse';

export function validateHref(href: string) {
    // check href and treat it as invalid if it uses the javascript: protocol
    const parts = new URL(href);
    // eslint-disable-next-line no-script-url
    return parts.protocol !== 'javascript:';
}

