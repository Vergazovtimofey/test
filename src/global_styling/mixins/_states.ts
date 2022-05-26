import { CSSProperties } from 'react';
import { useEuiTheme, UseEuiTheme } from '../../service/theme';

export type _EuiFocusRingOffset =
    | 'inset'
    | 'outset'
    | 'center'
    | CSSProperties['outlineOffset'];

/**
 * It is best practice to utilize the browser's default `outline` property for handling focus rings.
 * However, some components need to be forced to have the same behavior, or adjust the display.
 * This function re-applies the same default outline with a couple parameters
 * @param euiTheme UseEuiTheme.euiTheme
 * @param offset Accepts a specific measurement or 'inset', 'outset' or 'center' to adjust outline position
 * @param color Accepts any CSS color, **Note: only works in -webkit-**
 */
export const euiFocusRing = (
    euiTheme: UseEuiTheme['euiTheme'],
    offset: _EuiFocusRingOffset = 'center',
    color?: CSSProperties['outlineColor']
) => {
    // Width is enforced as a constant at the global theme layer
    const outlineWidth = euiTheme.focus.width;
    const outlineColor = color || euiTheme.focus.color;

    let outlineOffset = offset;
    if (offset === 'inset') {
        outlineOffset = `-${outlineWidth}`;
    } else if (offset === 'outset') {
        outlineOffset = `${outlineWidth}`;
    } else if (offset === 'center') {
        outlineOffset = `calc(${outlineWidth} / -2);`;
    }


    return `
    outline: ${outlineWidth} solid ${outlineColor};
    outline-offset: ${outlineOffset};
    // 👀 Chrome respects :focus-visible and allows coloring the \`auto\` style
    &:focus-visible {
      outline-style: auto;
    }
    // 🙅‍♀️ But Chrome also needs to have the outline forcefully removed from regular \`:focus\` state
    &:not(:focus-visible) {
      outline: none;
    }
  `;
};

// Hook version
export const useEuiFocusRing = (
    offset?: _EuiFocusRingOffset,
    color?: CSSProperties['outlineColor']
) => {
    const { euiTheme } = useEuiTheme();
    return euiFocusRing(euiTheme, offset, color);
};