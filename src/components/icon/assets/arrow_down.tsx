import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}

const EuiIconArrowDown = ({
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
            d="M1.957 4.982a.75.75 0 011.06-.025l4.81 4.591a.25.25 0 00.346 0l4.81-4.59a.75.75 0 011.035 1.085l-4.81 4.59a1.75 1.75 0 01-2.416 0l-4.81-4.59a.75.75 0 01-.025-1.06z"
        />
    </svg>
);

export const icon = EuiIconArrowDown;