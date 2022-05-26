import  {
    ReactNode,
    FunctionComponent,
    useState,
    useEffect,
} from 'react';
import { throttle } from '../../service/throttle';
import { EuiBreakpointSize, getBreakpoint } from '../../service/breakpoint';

export type EuiShowForBreakpoints = EuiBreakpointSize;

export interface EuiShowForProps {
    /**
     * Required otherwise nothing ever gets returned
     */
    children: ReactNode;
    /**
     * List of all the responsive sizes to show the children for.
     * Array of #EuiBreakpointSize
     */
    sizes: EuiShowForBreakpoints[] | 'all' | 'none';
}

export const EuiShowFor: FunctionComponent<EuiShowForProps> = ({
                                                                   children,
                                                                   sizes,
                                                               }) => {
    const [currentBreakpoint, setCurrentBreakpoint] = useState(
        getBreakpoint(typeof window === 'undefined' ? -Infinity : window.innerWidth)
    );

    const functionToCallOnWindowResize = throttle(() => {
        const newBreakpoint = getBreakpoint(window.innerWidth);
        if (newBreakpoint !== currentBreakpoint) {
            setCurrentBreakpoint(newBreakpoint);
        }
        // reacts every 50ms to resize changes and always gets the final update
    }, 50);

    // Add window resize handlers
    useEffect(() => {
        window.addEventListener('resize', functionToCallOnWindowResize);

        return () => {
            window.removeEventListener('resize', functionToCallOnWindowResize);
        };
    }, [sizes, functionToCallOnWindowResize]);

    if (
        sizes === 'all' ||
        sizes.includes(currentBreakpoint as EuiBreakpointSize)
    ) {
        return <>{children}</>;
    }

    return null;
};