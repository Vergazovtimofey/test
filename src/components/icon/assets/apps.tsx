import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}

const EuiIconApps = ({
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
        <path d="M2 4V2h2v2H2zm5 0V2h2v2H7zm5 0V2h2v2h-2zM2 9V7h2v2H2zm5 0V7h2v2H7zm5 0V7h2v2h-2zM2 14v-2h2v2H2zm5 0v-2h2v2H7zm5 0v-2h2v2h-2z" />
    </svg>
);

export const icon = EuiIconApps;