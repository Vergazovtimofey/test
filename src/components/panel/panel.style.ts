import { css } from '@emotion/react';
import { euiShadow } from '../../themes/amsterdam/global_styling/mixins';
import { UseEuiTheme } from '../../service/theme';
import { euiCanAnimate} from '../../global_styling/animations';
import { logicalTextAlignCSS } from '../../global_styling/logicals';

export const euiPanelStyles = (euiThemeContext: UseEuiTheme) => {
    const { euiTheme } = euiThemeContext;

    return {
        // Base
        euiPanel: css`
      flex-grow: 0;
    `,

        grow: css`
      flex-grow: 1;
    `,

        hasShadow: css`
      ${euiShadow(euiThemeContext, 'm')};
    `,

        hasBorder: css`
      border: ${euiTheme.border.thin};
    `,

        radius: {
            none: css``,
            m: css`
        border-radius: ${euiTheme.border.radius.medium};
      `,
        },

        // Setup interactive behavior
        isClickable: css`
      ${euiCanAnimate} {
        transition: box-shadow ${euiTheme.animation.fast}
            ${euiTheme.animation.resistance},
          transform ${euiTheme.animation.fast} ${euiTheme.animation.resistance};
      }
      &:enabled {
        // This is a good selector for buttons since it doesn't exist on divs
        // in case of button wrapper which inherently is inline-block and no width
        display: block;
        width: 100%;
        ${logicalTextAlignCSS('left')}
      }
      &:hover,
      &:focus {
        ${euiShadow(euiThemeContext, 'l')};
        transform: translateY(-${euiTheme.size.xxs});
        cursor: pointer;
      }
    `,
    };
};