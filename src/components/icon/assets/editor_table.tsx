import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}

const EuiIconEditorTable = ({
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
        <path d="M14 3v2H2V3v10h12V3zM2 2h12c.552 0 1 .413 1 .923v10.154c0 .51-.448.923-1 .923H2c-.552 0-1-.413-1-.923V2.923C1 2.413 1.448 2 2 2zm0 5h12v1H2V7zm0 3h12v1H2v-1z" />
    </svg>
);

export const icon = EuiIconEditorTable;