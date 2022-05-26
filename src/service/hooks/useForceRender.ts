import { useState, useCallback } from 'react';

export const useForceRender = () => {
    const [, setRenderCount] = useState(0);
    return useCallback(() => {
        setRenderCount((x) => x + 1);
    }, []);
};