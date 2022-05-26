import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}

const EuiIconLineDotted = ({
                               title,
                               titleId,
                               ...props
                           }: React.SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <path d="M13.5 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM11 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM5.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-4 4a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
);

export const icon = EuiIconLineDotted;