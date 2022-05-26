import  {
    AriaAttributes,
    HTMLAttributes,
    FunctionComponent,
    ReactNode,
    useEffect,
    useState,
} from 'react';

import { EuiScreenReaderOnly } from '../screen_reader_only';

export interface EuiScreenReaderLiveProps {
    /**
     * Whether to make screen readers aware of the content
     */
    isActive?: boolean;
    /**
     * Content for screen readers to announce
     */
    children?: ReactNode;
    /**
     * `role` attribute for both live regions.
     *
     * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#roles_with_implicit_live_region_attributes
     */
    role?: HTMLAttributes<HTMLDivElement>['role'];
    /**
     * `aria-live` attribute for both live regions
     */
    'aria-live'?: AriaAttributes['aria-live'];
}

export const EuiScreenReaderLive: FunctionComponent<EuiScreenReaderLiveProps> = ({
                                                                                     children,
                                                                                     isActive = true,
                                                                                     role = 'status',
                                                                                     'aria-live': ariaLive = 'polite',
                                                                                 }) => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        setToggle((toggle) => !toggle);
    }, [children]);

    return (

        <EuiScreenReaderOnly>
            <div>
                <div role={role} aria-atomic="true" aria-live={ariaLive}>
                    {isActive && toggle ? children : ''}
                </div>
                <div role={role} aria-atomic="true" aria-live={ariaLive}>
                    {isActive && !toggle ? children : ''}
                </div>
            </div>
        </EuiScreenReaderOnly>
    );
};