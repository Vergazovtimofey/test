import { isDomainSecure } from '../url';

export const getSecureRelForTarget = ({
                                          href,
                                          target = '',
                                          rel,
                                      }: {
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top' | string;
    rel?: string;
}) => {
    const isElasticHref = !!href && isDomainSecure(href);
    const relParts = !!rel
        ? rel.split(' ').filter((part) => !!part.length && part !== 'noreferrer')
        : [];

    if (!isElasticHref) {
        relParts.push('noreferrer');
    }

    if (target.includes('_blank') && relParts.indexOf('noopener') === -1) {
        relParts.push('noopener');
    }

    return relParts.sort().join(' ').trim();
};