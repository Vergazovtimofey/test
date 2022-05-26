import { css } from '@emotion/react';
import { UseEuiTheme } from '../../../service/theme';

export const euiSkipLinkStyles = ({ euiTheme }: UseEuiTheme) => {
    return {
        euiSkipLink: css`
      transition: none !important;
      &:focus {
        animation: none !important;
      }
    `,
        // Positions
        // Set positions on focus only as to not override screenReaderOnly position
        // When positioned absolutely, consumers still need to tell it WHERE (top,left,etc...)
        absolute: css`
      &:focus {
        position: absolute;
      }
    `,
        fixed: css`
      &:focus {
        position: fixed;
        inset-block-start: ${euiTheme.size.xs};
        inset-inline-start: ${euiTheme.size.xs};
        z-index: ${Number(euiTheme.levels.header) + 1};
      }
    `,
    };
};