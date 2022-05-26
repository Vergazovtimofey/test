import { ColorModeSwitch } from '../../service/theme/types';
import { CSSProperties } from 'react';

/**
 * NOTE: These were quick conversions of their Sass counterparts.
 *       The commented out keys have not been established as necessary yet.
 */

export interface _EuiThemeFocusOutline {
    /**
     * A single CSS property: value
     */
    [key: string]: ColorModeSwitch;
}

export interface _EuiThemeFocus {
    /**
     * Default color of the focus ring, some components may override this property
     */
    color: ColorModeSwitch;
    /**
     * Thickness of the outline
     */
    width: CSSProperties['borderWidth'];
    /**
     * Used to transparentize any color at certain values
     */
    // transparency: ColorModeSwitch<number>;
    /**
     * Default color plus transparency
     */
    // backgroundColor: ColorModeSwitch;
    /**
     * Using `outline` is new for Amsterdam but is set to `none` in legacy theme
     */
    // outline: _EuiThemeFocusOutline;
}