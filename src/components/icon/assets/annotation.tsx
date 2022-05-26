import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}

const EuiIconAnnotation = ({
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
        <path d="M3 6.5a4.5 4.5 0 115 4.473V16H7v-5.027A4.5 4.5 0 013 6.5z" />
    </svg>
);

export const icon = EuiIconAnnotation;