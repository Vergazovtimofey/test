import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}

const EuiIconInvert = ({
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
        <path d="M8 13.25a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5zM8 14A6 6 0 118 2a6 6 0 010 12z" />
        <path d="M8 2a6 6 0 100 12V2z" />
    </svg>
);

export const icon = EuiIconInvert;