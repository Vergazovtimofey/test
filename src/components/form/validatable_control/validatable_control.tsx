import {
    Children,
    cloneElement,
    MutableRefObject,
    ReactElement,
    Ref,
    FunctionComponent,
    useRef,
    useEffect,
    useCallback,
} from 'react';
import { CommonProps } from '../../common';

export interface HTMLConstraintValidityElement extends Element {
    setCustomValidity: (error: string) => void;
}

export interface ReactElementWithRef extends ReactElement {
    ref?: Ref<HTMLConstraintValidityElement>;
}

function isMutableRef(
    ref?: Ref<HTMLConstraintValidityElement>
): ref is MutableRefObject<HTMLConstraintValidityElement> {
    return ref != null && ref.hasOwnProperty('current');
}

export interface EuiValidatableControlProps {
    isInvalid?: boolean;
    /**
     * ReactNode to render as this component's content
     */
    children: ReactElementWithRef;
}

export const EuiValidatableControl: FunctionComponent<
    CommonProps & EuiValidatableControlProps
    > = ({ isInvalid, children }) => {
    const control = useRef<HTMLConstraintValidityElement | null>(null);

    const child = Children.only(children);
    const childRef = child.ref;

    const replacedRef = useCallback(
        (element: HTMLConstraintValidityElement) => {
            control.current = element;

            // Call the original ref, if any
            if (typeof childRef === 'function') {
                childRef(element);
            } else if (isMutableRef(childRef)) {
                childRef.current = element;
            }
        },
        [childRef]
    );

    useEffect(() => {
        if (
            control.current === null ||
            typeof control.current.setCustomValidity !== 'function'
        ) {
            return; // jsdom doesn't polyfill this for the server-side
        }

        if (isInvalid) {
            control.current.setCustomValidity('Invalid');
        } else {
            control.current.setCustomValidity('');
        }
    });

    return cloneElement(child, {
        ref: replacedRef,
        'aria-invalid': isInvalid,
    });
};