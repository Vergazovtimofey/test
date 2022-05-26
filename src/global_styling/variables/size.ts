export type _EuiThemeBase = number;

export const EuiThemeSizes = [
    'xxs',
    'xs',
    's',
    'm',
    'base',
    'l',
    'xl',
    'xxl',
    'xxxl',
    'xxxxl',
] as const;

export type _EuiThemeSize = typeof EuiThemeSizes[number];

export type _EuiThemeSizes = Record<_EuiThemeSize, string>;