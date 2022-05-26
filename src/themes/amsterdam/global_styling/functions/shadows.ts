import chroma from 'chroma-js';
import {
    COLOR_MODES_STANDARD,
    EuiThemeColorModeStandard,
} from '../../../../service/theme/types';

// Create a CSS color value using whose opacity is determined based
// on either a light or dark theme. We use a multiplier
// of 1 for light themes and 2.5 for dark themes
export const getShadowColor = (
    color: string,
    opacity: number,
    colorMode: EuiThemeColorModeStandard
) => {
    const themeOpacity =
        colorMode === COLOR_MODES_STANDARD.dark ? opacity * 2.5 : opacity * 1;
    return chroma(color).alpha(themeOpacity).css();
};
