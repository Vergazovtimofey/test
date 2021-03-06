import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}

const EuiIconDoubleArrowRight = ({
                                     title,
                                     titleId,
                                     ...props
                                 }: React.SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.232 14.043a.75.75 0 01-.025-1.06l4.591-4.81a.25.25 0 000-.346l-4.59-4.81a.75.75 0 011.085-1.035l4.59 4.81a1.75 1.75 0 010 2.416l-4.59 4.81a.75.75 0 01-1.06.024z"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.232 14.043a.75.75 0 01-.025-1.06l4.591-4.81a.25.25 0 000-.346l-4.59-4.81a.75.75 0 011.085-1.035l4.59 4.81a1.75 1.75 0 010 2.416l-4.59 4.81a.75.75 0 01-1.06.024z"
        />
    </svg>
);

export const icon = EuiIconDoubleArrowRight;