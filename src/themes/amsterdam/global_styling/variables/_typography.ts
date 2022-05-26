import { computed } from '../../../../service/theme/utils';
import {
    _EuiThemeFont,
    _EuiThemeFontBase,
    _EuiThemeFontScales,
    _EuiThemeFontWeights,
} from '../../../../global_styling/variables/typography';

// Typographic scale -- loosely based on Major Third (1.250)
export const fontScale: _EuiThemeFontScales = {
    xxxs: 0.5625,
    xxs: 0.6875,
    xs: 0.75,
    s: 0.875,
    m: 1,
    l: 1.375,
    xl: 1.6875,
    xxl: 2.125,
};

// Families & base font settings
export const fontBase: _EuiThemeFontBase = {
    family: "'Inter', BlinkMacSystemFont, Helvetica, Arial, sans-serif",
    familyCode: "'Roboto Mono', Menlo, Courier, monospace",

    // Careful using ligatures. Code editors like ACE will often error because of width calculations
    featureSettings: "'calt' 1, 'kern' 1, 'liga' 1",

    baseline: computed(([base]) => base / 4, ['base']),
    lineHeightMultiplier: 1.5,
};

export const fontWeight: _EuiThemeFontWeights = {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
};

export const font: _EuiThemeFont = {
    ...fontBase,
    scale: fontScale,
    weight: fontWeight,
    body: {
        scale: 's',
        weight: 'regular',
    },
    title: {
        weight: 'bold',
    },
};