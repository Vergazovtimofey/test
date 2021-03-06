import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}

const EuiIconLineDashed = ({
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
        <path d="M12.707 4.707a1 1 0 11-1.414-1.414l2-2a1 1 0 111.414 1.414l-2 2zm-6.414 5a1 1 0 001.414 0l2-2a1 1 0 10-1.414-1.414l-2 2a1 1 0 000 1.414zm-5 5a1 1 0 001.414 0l2-2a1 1 0 10-1.414-1.414l-2 2a1 1 0 000 1.414z" />
    </svg>
);

export const icon = EuiIconLineDashed;