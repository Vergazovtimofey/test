import { createContext } from 'react';
import {
    EuiThemeColorModeStandard,
    EuiThemeSystem,
    EuiThemeModifications,
    EuiThemeComputed,
} from './types';
import { EuiThemeAmsterdam } from '../../themes/amsterdam/theme';
import { DEFAULT_COLOR_MODE, getComputed } from './utils';

export const EuiSystemContext = createContext<EuiThemeSystem>(
    EuiThemeAmsterdam
);
export const EuiModificationsContext = createContext<EuiThemeModifications>({});
export const EuiColorModeContext = createContext<EuiThemeColorModeStandard>(
    DEFAULT_COLOR_MODE
);
export const EuiThemeContext = createContext<EuiThemeComputed>(
    getComputed(EuiThemeAmsterdam, {}, DEFAULT_COLOR_MODE)
);