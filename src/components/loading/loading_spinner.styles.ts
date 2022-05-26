import { css, keyframes } from '@emotion/react';
import {  euiCanAnimate } from '../../global_styling/animations';
import { _EuiThemeSize } from '../../global_styling/variables';
import { UseEuiTheme } from '../../service';
import { EuiLoadingSpinnerSize } from './loading_spinner';

const _loadingSpinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const spinnerSizes: {
    [size in EuiLoadingSpinnerSize]: _EuiThemeSize;
} = {
    s: 'm',
    m: 'base',
    l: 'l',
    xl: 'xl',
    xxl: 'xxl',
};

const spinnerColors = (main: string, highlight: string) => {
    return `${highlight} ${main} ${main} ${main}`;
};

export const euiLoadingSpinnerStyles = ({ euiTheme }: UseEuiTheme) => {
    return {
        euiLoadingSpinner: css`
      flex-shrink: 0; // Ensures it never scales down below its intended size
      display: inline-block;
      border-radius: 50%;
      border: ${euiTheme.border.thick};
      border-color: ${spinnerColors(
            euiTheme.border.color,
            euiTheme.colors.primary
        )};
      ${euiCanAnimate} {
        animation: ${_loadingSpinner} 0.6s infinite linear;
      }
    `,

        // Sizes
        s: css`
      width: ${euiTheme.size[spinnerSizes.s]};
      height: ${euiTheme.size[spinnerSizes.s]};
      border-width: calc(${euiTheme.border.width.thin} * 1.5);
    `,
        m: css`
      width: ${euiTheme.size[spinnerSizes.m]};
      height: ${euiTheme.size[spinnerSizes.m]};
      border-width: calc(${euiTheme.border.width.thin} * 1.5);
    `,
        l: css`
      width: ${euiTheme.size[spinnerSizes.l]};
      height: ${euiTheme.size[spinnerSizes.l]};
    `,
        xl: css`
      width: ${euiTheme.size[spinnerSizes.xl]};
      height: ${euiTheme.size[spinnerSizes.xl]};
    `,
        xxl: css`
      width: ${euiTheme.size[spinnerSizes.xxl]};
      height: ${euiTheme.size[spinnerSizes.xxl]};
    `,
    };
};