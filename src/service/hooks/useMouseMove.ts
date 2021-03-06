import { MouseEvent, TouchEvent, useEffect } from 'react';
import { throttle } from '../../service/throttle';

export function isMouseEvent<T = HTMLDivElement>(
    event: MouseEvent<T> | TouchEvent<T>
): event is MouseEvent<T> {
    return typeof event === 'object' && 'pageX' in event && 'pageY' in event;
}

export function useMouseMove<T = HTMLDivElement>(
    handleChange: (
        location: { x: number; y: number },
        isFirstInteraction?: boolean
    ) => void,
    interactionConditional: any = true
): [
    (e: MouseEvent<T>) => void,
    (e: MouseEvent<T> | TouchEvent<T>, isFirstInteraction?: boolean) => void
] {
    useEffect(() => {
        return unbindEventListeners;
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const handleInteraction = (
        e: MouseEvent<T> | TouchEvent<T>,
        isFirstInteraction?: boolean
    ) => {
        if (e) {
            if (interactionConditional) {
                const x = isMouseEvent<T>(e) ? e.pageX : e.touches[0].pageX;
                const y = isMouseEvent<T>(e) ? e.pageY : e.touches[0].pageY;
                handleChange({ x, y }, isFirstInteraction);
            }
        }
    };
    const handleMouseMove = throttle((e: MouseEvent) => {
        handleChange({ x: e.pageX, y: e.pageY }, false);
    });
    const handleMouseDown = (e: MouseEvent<T>) => {
        handleInteraction(e, true);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', unbindEventListeners);
    };
    const unbindEventListeners = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', unbindEventListeners);
    };

    return [handleMouseDown, handleInteraction];
}