import { CSSProperties } from 'react';

/**
 * A constant storing the `prefers-reduced-motion` media query
 * so that when it is turned off, animations are not run.
 */
export const euiCanAnimate =
    '@media screen and (prefers-reduced-motion: no-preference)';

/**
 * A constant storing the `prefers-reduced-motion` media query that will
 * only apply the content if the setting is off (reduce).
 */
export const euiCantAnimate =
    '@media screen and (prefers-reduced-motion: reduce)';

/**
 * Speeds / Durations / Delays
 */

export const EuiThemeAnimationSpeeds = [
    'extraFast',
    'fast',
    'normal',
    'slow',
    'extraSlow',
] as const;

export type _EuiThemeAnimationSpeed = typeof EuiThemeAnimationSpeeds[number];

export type _EuiThemeAnimationSpeeds = Record<
    _EuiThemeAnimationSpeed,
    CSSProperties['animationDuration']
    >;

/**
 * Easings / Timing functions
 */

export const EuiThemeAnimationEasings = ['bounce', 'resistance'] as const;

export type _EuiThemeAnimationEasing = typeof EuiThemeAnimationEasings[number];

export type _EuiThemeAnimationEasings = Record<
    _EuiThemeAnimationEasing,
    CSSProperties['animationTimingFunction']
    >;

export type _EuiThemeAnimation = _EuiThemeAnimationEasings &
    _EuiThemeAnimationSpeeds;