import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}

const EuiIconLogoDocker = ({
                               title,
                               titleId,
                               ...props
                           }: React.SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width={32}
        height={32}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            d="M18.099 15.108h3.304v-2.973H18.1v2.973zm-3.905 0h3.304v-2.973h-3.304v2.973zm-3.905 0h3.304v-2.973H10.29v2.973zm-3.905 0H9.69v-2.973H6.384v2.973zm-3.904 0h3.304v-2.973H2.48v2.973zm3.904-3.568H9.69V8.568H6.384v2.972zm3.905 0h3.304V8.568H10.29v2.972zm3.905 0h3.304V8.568h-3.304v2.972zm0-3.567h3.304V5h-3.304v2.973zm17.139 5.402c-.722-.478-2.38-.653-3.656-.415-.164-1.19-.834-2.221-2.052-3.153l-.7-.463-.468.694c-.598.893-.897 2.13-.8 3.317.045.418.183 1.164.617 1.82-.433.231-1.29.549-2.42.528H.124l-.043.247c-.204 1.193-.2 4.914 2.24 7.774C4.178 25.898 6.96 27 10.59 27c7.87 0 13.693-3.586 16.42-10.104 1.073.02 3.381.006 4.567-2.237.031-.051.102-.186.31-.61l.113-.234-.667-.44z"
            fill="#136EA3"
            fillRule="evenodd"
        />
    </svg>
);

export const icon = EuiIconLogoDocker;