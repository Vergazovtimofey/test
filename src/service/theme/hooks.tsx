import  { forwardRef, useContext } from 'react';

import {
    EuiThemeContext,
    EuiModificationsContext,
    EuiColorModeContext,
} from './context';
import {
    EuiThemeColorModeStandard,
    EuiThemeModifications,
    EuiThemeComputed,
} from './types';

export interface UseEuiTheme<T extends {} = {}> {
    euiTheme: EuiThemeComputed<T>;
    colorMode: EuiThemeColorModeStandard;
    modifications: EuiThemeModifications<T>;
}

export const useEuiTheme = <T extends {} = {}>(): UseEuiTheme<T> => {
    const theme = useContext(EuiThemeContext);
    const colorMode = useContext(EuiColorModeContext);
    const modifications = useContext(EuiModificationsContext);

    return {
        euiTheme: theme as EuiThemeComputed<T>,
        colorMode,
        modifications: modifications as EuiThemeModifications<T>,
    };
};

export interface WithEuiThemeProps<P = {}> {
    theme: UseEuiTheme<P>;
}
export const withEuiTheme = <T extends {} = {}, U extends {} = {}>(
    Component: React.ComponentType<T & WithEuiThemeProps<U>>
) => {
    const componentName = Component.displayName || Component.name || 'Component';
    const Render = (
        props: Omit<T, keyof WithEuiThemeProps<U>>,
        ref: React.Ref<Omit<T, keyof WithEuiThemeProps<U>>>
    ) => {
        const { euiTheme, colorMode, modifications } = useEuiTheme<U>();
        return (
            <Component
                theme={{
                    euiTheme,
                    colorMode,
                    modifications,
                }}
                ref={ref}
                {...(props as T)}
            />
        );
    };

    const WithEuiTheme = forwardRef(Render);

    WithEuiTheme.displayName = `WithEuiTheme(${componentName})`;

    return WithEuiTheme;
};