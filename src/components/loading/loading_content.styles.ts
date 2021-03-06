import { css, keyframes } from '@emotion/react';
import { euiCanAnimate } from '../../global_styling/animations';
import { COLOR_MODES_STANDARD, shade, tint, UseEuiTheme } from '../../service';

const loadingContentGradient = keyframes`
  0% {
    transform: translateX(-53%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const euiLoadingContentStyles = ({
                                            euiTheme,
                                            colorMode,
                                        }: UseEuiTheme) => {
    const gradientStartStop =
        colorMode === COLOR_MODES_STANDARD.dark
            ? shade(euiTheme.colors.lightShade, 0.12)
            : tint(euiTheme.colors.lightShade, 0.65);
    const gradientMiddle =
        colorMode === COLOR_MODES_STANDARD.dark
            ? shade(euiTheme.colors.lightShade, 0.24)
            : tint(euiTheme.colors.lightShade, 0.8);

    return {
        euiLoadingContent__singleLine: css`
      display: block;
      width: 100%;
      height: ${euiTheme.size.base};
      border-radius: ${euiTheme.border.radius.medium};
      background: ${gradientStartStop};
      overflow: hidden;
      &:not(:last-child) {
        margin-block-end: ${euiTheme.size.s};
      }
      &:last-child:not(:only-child) {
        width: 75%;
      }
      &::after {
        content: '';
        display: block;
        width: 220%;
        height: 100%;
        background: linear-gradient(
          137deg,
          ${gradientStartStop} 45%,
          ${gradientMiddle} 50%,
          ${gradientStartStop} 55%
        );
        ${euiCanAnimate} {
          animation: ${loadingContentGradient} 1.5s
            ${euiTheme.animation.resistance} infinite;
        }
      }
    `,
    };
};