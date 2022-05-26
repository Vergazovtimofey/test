import { buildTheme } from '../../service/theme/utils';
import { EuiThemeShape } from '../../service/theme/types';

import { colors } from './global_styling/variables/_colors';
import { animation } from './global_styling/variables/_animation';
import { breakpoint } from './global_styling/variables/_breakpoint';
import { base, size } from './global_styling/variables/_size';
import { border } from './global_styling/variables/_borders';
import { levels } from './global_styling/variables/_levels';
import { font } from './global_styling/variables/_typography';
import { focus } from './global_styling/variables/_states';

export const AMSTERDAM_NAME_KEY = 'EUI_THEME_AMSTERDAM';

export const euiThemeAmsterdam: EuiThemeShape = {
    colors,
    base,
    size,
    border,
    font,
    animation,
    breakpoint,
    levels,
    focus,
};

export const EuiThemeAmsterdam = buildTheme(
    euiThemeAmsterdam,
    AMSTERDAM_NAME_KEY
);