import  { FunctionComponent, HTMLAttributes } from 'react';
import classNames from 'classnames';

import { CommonProps } from '../common';
import { useEuiTheme } from '../../service/theme';

import { euiSpacerStyles } from './spacer.styles';

export const SIZES = ['xs', 's', 'm', 'l', 'xl', 'xxl'] as const;
export type SpacerSize = typeof SIZES[number];

export type EuiSpacerProps = HTMLAttributes<HTMLDivElement> &
    CommonProps & {
    size?: SpacerSize;
};

export const EuiSpacer: FunctionComponent<EuiSpacerProps> = ({
                                                                 className,
                                                                 size = 'l',
                                                                 ...rest
                                                             }) => {
    const euiTheme = useEuiTheme();
    const styles = euiSpacerStyles(euiTheme);
    const classes = classNames(
        'euiSpacer',
        { [`euiSpacer--${size}`]: size },
        className
    );

    const cssStyles = [styles.euiSpacer, styles[size]];

    return <div className={classes} /*css={cssStyles}*/ {...rest} />;
};