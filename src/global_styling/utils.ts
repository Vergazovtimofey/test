import { useEuiTheme, UseEuiTheme } from '../service/theme';

/**
 * Creates a React hook from a style mixin factory.
 * The resulting hook accepts a single option property
 * in the shape of the mixin's options
 *
 * `const useStyle = createStyleHook((euiTheme, {color: string}, colorMode) => {})`
 * Results in the following with `euiTheme` and `colorMode` values automatically applied
 * `const styles = useStyle({color: string}) => void`
 */
export function createStyleHookFromMixin<T>(
    mixinFactory: (
        theme: UseEuiTheme['euiTheme'],
        opts: T,
        colorMode: UseEuiTheme['colorMode']
    ) => string
): (options?: T) => string {
    return (options?: T) => {
        const { euiTheme, colorMode } = useEuiTheme();
        return mixinFactory(euiTheme, options as T, colorMode);
    };
}