import { css } from '@emotion/react';
import { logicals } from '../../global_styling/functions';
import { UseEuiTheme } from '../../service/theme';

export const euiSpacerStyles = ({ euiTheme }: UseEuiTheme) => ({
    euiSpacer: css`
    flex-shrink: 0; // don't ever let this shrink in height if direct descendent of flex;
  `,
    // Sizes
    xs: css`
    ${logicals.height}: ${euiTheme.size.xs};
  `,
    s: css`
    ${logicals.height}: ${euiTheme.size.s};
  `,
    m: css`
    ${logicals.height}: ${euiTheme.size.base};
  `,
    l: css`
    ${logicals.height}: ${euiTheme.size.l};
  `,
    xl: css`
    ${logicals.height}: ${euiTheme.size.xl};
  `,
    xxl: css`
    ${logicals.height}: ${euiTheme.size.xxl};
  `,
});