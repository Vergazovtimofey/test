import { useState } from 'react';
import { useUpdateEffect } from './useUpdateEffect';

export function useDependentState<T>(
    valueFn: (previousState: undefined | T) => T,
    deps: unknown[]
) {
    const [state, setState] = useState<T>(valueFn as () => T);

    // don't call setState on initial mount
    useUpdateEffect(() => {
        setState(valueFn);
    }, deps);

    return [state, setState] as const;
}