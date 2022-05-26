import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}

const EuiIconLineSolid = ({
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
        <path d="M1.293 14.707a1 1 0 001.414 0l12-12a1 1 0 10-1.414-1.414l-12 12a1 1 0 000 1.414z" />
    </svg>
);

export const icon = EuiIconLineSolid;