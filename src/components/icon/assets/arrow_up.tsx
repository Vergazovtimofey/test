import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}

const EuiIconArrowUp = ({
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
            d="M1.957 11.018c.286.3.761.31 1.06.024l4.81-4.59a.25.25 0 01.346 0l4.81 4.59a.75.75 0 001.035-1.085l-4.81-4.59a1.75 1.75 0 00-2.416 0l-4.81 4.59a.75.75 0 00-.025 1.06z"
        />
    </svg>
);

export const icon = EuiIconArrowUp;