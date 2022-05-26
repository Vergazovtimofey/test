import { useEffect, useRef } from 'react';

export const useUpdateEffect = (effect: Function, deps: unknown[]) => {
    // use ref instead of a state to avoid causing an unnecessary re-render
    const hasMounted = useRef<boolean>(false);

    useEffect(() => {
        // don't invoke the effect on initial mount
        if (hasMounted.current === true) {
            return effect();
        } else {
            hasMounted.current = true;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};