/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

// THIS IS A GENERATED FILE. DO NOT MODIFY MANUALLY. @see scripts/compile-icons.js

import * as React from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}

const EuiIconSwatchInput = ({
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
        <rect x={2} y={2} width={12} height={12} rx={3} />
        <rect
            className="euiSwatchInput__stroke"
            x={2.5}
            y={2.5}
            width={11}
            height={11}
            rx={2}
        />
    </svg>
);

export const icon = EuiIconSwatchInput;