import { ReactNode, useCallback, useEffect, useRef } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { useInnerText } from './inner_text';

export function useRenderToText(node: ReactNode, placeholder = ''): string {
    const [ref, text] = useInnerText(placeholder);
    const hostNode = useRef<Element | null>(null);

    const onUnmount = () => {
        if (hostNode.current) {
            unmountComponentAtNode(hostNode.current);
            hostNode.current = null;
        }
    };

    const setRef = useCallback(
        (node: Element | null) => {
            if (hostNode.current) {
                ref(node);
            }
        },
        [ref]
    );

    useEffect(() => {
        hostNode.current = (document.createDocumentFragment() as unknown) as Element;
        render(<div ref={setRef}>{node}</div>, hostNode.current);
        return () => {
            onUnmount();
        };
    }, [node, setRef]);

    return text || placeholder;
}