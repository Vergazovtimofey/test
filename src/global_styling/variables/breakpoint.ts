export const EuiThemeBreakpoints = ['xs', 's', 'm', 'l', 'xl'] as const;

export type _EuiThemeBreakpoint = typeof EuiThemeBreakpoints[number];

export type _EuiThemeBreakpoints = {
    /**
     * Set the minimum window width at which to start to the breakpoint
     */
    [key in _EuiThemeBreakpoint]: number;
};