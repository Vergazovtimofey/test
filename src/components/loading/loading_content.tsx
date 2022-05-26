import  { FunctionComponent, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { CommonProps } from '../common';
import { useEuiTheme } from '../../service';
import { useLoadingAriaLabel } from './_loading_strings';
import { euiLoadingContentStyles } from './loading_content.styles';

export type LineRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type EuiLoadingContentProps = CommonProps &
    HTMLAttributes<HTMLDivElement> & {
    lines?: LineRange;
};

export const EuiLoadingContent: FunctionComponent<EuiLoadingContentProps> = ({
                                                                                 lines = 3,
                                                                                 className,
                                                                                 'aria-label': ariaLabel,
                                                                                 ...rest
                                                                             }) => {
    const euiTheme = useEuiTheme();
    const styles = euiLoadingContentStyles(euiTheme);
    const lineCssStyles = [styles.euiLoadingContent__singleLine];
    const defaultLabel = useLoadingAriaLabel();

    const classes = classNames('euiLoadingContent', className);
    const lineElements = [];

    for (let i = 0; i < lines; i++) {
        lineElements.push(<span key={i} /*css={lineCssStyles}*/ />);
    }

    return (
        <span
            className={classes}
            role="progressbar"
            aria-label={ariaLabel || defaultLabel}
            {...rest}
        >
      {lineElements}
    </span>
    );
};