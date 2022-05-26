import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}

const EuiIconEditorItemAlignMiddle = ({
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
        <path d="M4 7v1H1.5a.5.5 0 010-1H4zm8 0h2.5a.5.5 0 110 1H12V7zM7 1h2a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2V3a2 2 0 012-2z" />
    </svg>
);

export const icon = EuiIconEditorItemAlignMiddle;