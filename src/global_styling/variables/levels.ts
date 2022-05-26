import { CSSProperties } from 'react';

/**
 * Z-Index
 *
 * Remember that z-index is relative to parent and based on the stacking context.
 * z-indexes only compete against other z-indexes when they exist as children of
 * that shared parent.
 *
 * That means a popover with a settings of 2, will still show above a modal
 * with a setting of 100, if it is within that modal and not besides it.
 *
 * Generally that means it's a good idea to consider things added to this file
 * as competitive only as siblings.
 *
 * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
 */

export const EuiThemeLevels = [
    'toast',
    'modal',
    'mask',
    'navigation',
    'menu',
    'header',
    'flyout',
    'maskBelowHeader',
    'content',
] as const;

export type _EuiThemeLevel = typeof EuiThemeLevels[number];

export type _EuiThemeLevels = Record<
    _EuiThemeLevel,
    NonNullable<CSSProperties['zIndex']>
    >;