import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}

const EuiIconAppAuditbeat = ({
                                 title,
                                 titleId,
                                 ...props
                             }: React.SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 32 32"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <path className="euiIcon__fillSecondary" d="M15 0h2v32h-2z" />
        <path d="M0 32h13v-2H2V2h11V0H0zM19 0v2h11v28H19v2h13V0z" />
    </svg>
);

export const icon = EuiIconAppAuditbeat;