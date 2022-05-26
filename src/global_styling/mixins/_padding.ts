import { css } from '@emotion/react';
import { useEuiTheme, UseEuiTheme } from '../../service/theme';
import { logicalSide, LogicalSides } from '../functions';

export const PADDING_SIZES = ['none', 'xs', 's', 'm', 'l', 'xl'] as const;
export type EuiPaddingSize = typeof PADDING_SIZES[number];

export const euiPaddingSize = (
    size: EuiPaddingSize,
    { euiTheme }: UseEuiTheme
) => {
    switch (size) {
        case 'none':
            return null;
        case 'm':
            return euiTheme.size.base;
        default:
            return euiTheme.size[size];
    }
};

export const useEuiPaddingSize = (size: EuiPaddingSize) => {
    const euiTheme = useEuiTheme();
    return euiPaddingSize(size, euiTheme);
};

export const useEuiPaddingCSS = (side?: LogicalSides) => {
    const property = side ? `padding-${logicalSide[side]}` : 'padding';

    return {
        none: null,
        xs: css`
      ${property}: ${useEuiPaddingSize('xs')};
    `,
        s: css`
      ${property}: ${useEuiPaddingSize('s')};
    `,
        m: css`
      ${property}: ${useEuiPaddingSize('m')};
    `,
        l: css`
      ${property}: ${useEuiPaddingSize('l')};
    `,
        xl: css`
      ${property}: ${useEuiPaddingSize('xl')};
    `,
    };
};