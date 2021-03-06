import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}

const EuiIconGrabHorizontal = ({
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
        <path
            fillRule="evenodd"
            d="M6 2.5c0-.276.232-.5.5-.5.276 0 .5.229.5.5v11c0 .276-.232.5-.5.5a.503.503 0 01-.5-.5v-11zm3 0c0-.276.232-.5.5-.5.276 0 .5.229.5.5v11c0 .276-.232.5-.5.5a.503.503 0 01-.5-.5v-11z"
        />
    </svg>
);

export const icon = EuiIconGrabHorizontal;