import { useState, useEffect } from 'react';

import { isWithinBreakpoints, EuiBreakpointSize } from '../breakpoint';

/**
 * Given the current window.innerWidth and an array of breakpoint keys,
 * this hook stores state and returns true or false if the window.innerWidth
 * falls within any of the named breakpoints.
 *
 * @param {EuiBreakpointSize[]} sizes An array of named breakpoints
 * @param {boolean} isActive Manages whether the resize handler should be active
 * @returns {boolean} Returns `true` if current breakpoint name is included in `sizes`
 */
export function useIsWithinBreakpoints(
    sizes: EuiBreakpointSize[],
    isActive: boolean = true
) {
    const [isWithinBreakpointsValue, setIsWithinBreakpointsValue] = useState<
        boolean
        >(false);

    useEffect(() => {
        function handleResize() {
            setIsWithinBreakpointsValue(
                isWithinBreakpoints(window.innerWidth, sizes)
            );
        }

        if (isActive) {
            window.removeEventListener('resize', handleResize);
            window.addEventListener('resize', handleResize);
            handleResize();
        }

        return () => window.removeEventListener('resize', handleResize);
    }, [sizes, isActive]);

    return isWithinBreakpointsValue;
}