import { css } from '@emotion/react';
import { useEuiTheme, UseEuiTheme } from '../../service/theme';
import { shade, tint } from '../../service/color';

export const BACKGROUND_COLORS = [
    'transparent',
    'plain',
    'subdued',
    'accent',
    'primary',
    'success',
    'warning',
    'danger',
] as const;

export type EuiBackgroundColor = typeof BACKGROUND_COLORS[number];

export const euiBackgroundColor = (
    color: EuiBackgroundColor,
    { euiTheme, colorMode }: UseEuiTheme
) => {
    function tintOrShade(color: string) {
        return colorMode === 'DARK' ? shade(color, 0.7) : tint(color, 0.9);
    }

    switch (color) {
        case 'transparent':
            return 'transparent';
        case 'plain':
            return euiTheme.colors.emptyShade;
        case 'subdued':
            return euiTheme.colors.body;
        default:
            return tintOrShade(euiTheme.colors[color]);
    }
};

export const useEuiBackgroundColor = (color: EuiBackgroundColor) => {
    const euiTheme = useEuiTheme();
    return euiBackgroundColor(color, euiTheme);
};

export const useEuiBackgroundColorCSS = () => {
    return {
        transparent: css`
      background-color: ${useEuiBackgroundColor('transparent')};
    `,
        plain: css`
      background-color: ${useEuiBackgroundColor('plain')};
    `,
        subdued: css`
      background-color: ${useEuiBackgroundColor('subdued')};
    `,
        accent: css`
      background-color: ${useEuiBackgroundColor('accent')};
    `,
        primary: css`
      background-color: ${useEuiBackgroundColor('primary')};
    `,
        success: css`
      background-color: ${useEuiBackgroundColor('success')};
    `,
        warning: css`
      background-color: ${useEuiBackgroundColor('warning')};
    `,
        danger: css`
      background-color: ${useEuiBackgroundColor('danger')};
    `,
    };
};