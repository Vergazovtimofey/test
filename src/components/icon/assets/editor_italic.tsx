import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}

const EuiIconEditorItalic = ({
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
        <path d="M8.16 12H9.5a.5.5 0 110 1h-4a.5.5 0 110-1h1.639l1.7-8H7.5a.5.5 0 010-1h4a.5.5 0 110 1H9.861l-1.7 8z" />
    </svg>
);

export const icon = EuiIconEditorItalic;