import  { ComponentType } from 'react';

export const EuiIcon = ({ type, 'aria-label': ariaLabel, ...rest }: any) => (
    <span
        data-euiicon-type={
            typeof type === 'string' ? type : type.displayName || type.name
        }
        {...rest}
    >
    {
        // render aria-label as text, if it's passed in props
        ariaLabel ?? ''
    }
  </span>
);

export const appendIconComponentCache = (_: {
    [iconType: string]: ComponentType;
}) => {
    // manually appending to the internal EuiIcon cache is out-of-scope of this test environment
};

export const TYPES = [];
export const COLORS = [];
export const SIZES = [];