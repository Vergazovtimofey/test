import { css } from '@emotion/react';
import { UseEuiTheme } from '../../service/theme';
import {  logicalCSS } from '../../global_styling/logicals';
import { euiFocusRing } from '../../global_styling/mixins';

const _colorCSS = (color: string) => {
    return `
    color: ${color};
    &:hover,
    &:focus,
    &:target {
      text-decoration: underline;
    }
    &:target {
      color: darken(${color}, 10%);
    }
  `;
};

export const euiLinkHoverCSS = () => {
    return `
    text-decoration: underline;
  `;
};

export const euiLinkFocusCSS = ({ euiTheme }: UseEuiTheme) => {
    return `
    text-decoration: underline;
    text-decoration-thickness: ${euiTheme.border.width.thick} !important;
  `;
};

export const euiLinkCSS = (_theme: UseEuiTheme) => {
    const { euiTheme } = _theme;

    return `
    font-weight: ${euiTheme.font.weight.medium};
    text-align: left;
    &:hover {
      ${euiLinkHoverCSS()}
    }
    &:focus {
      ${euiFocusRing(euiTheme, 'outset')}
      ${euiLinkFocusCSS(_theme)}
    }
  `;
};

export const euiLinkStyles = (_theme: UseEuiTheme) => {
    const { euiTheme } = _theme;

    return {
        euiLink: css`
      ${euiLinkCSS(_theme)}
      user-select: text;
      &[target='_blank'] {
        position: relative;
      }
    `,
        disabled: css`
      font-weight: inherit;
      &:hover {
        cursor: auto;
      }
      &:hover,
      &:focus,
      &:target {
        text-decoration: none;
      }
    `,
        // Color styles
        primary: css(_colorCSS(euiTheme.colors.primaryText)),
        subdued: css(_colorCSS(euiTheme.colors.subdued)),
        success: css(_colorCSS(euiTheme.colors.successText)),
        accent: css(_colorCSS(euiTheme.colors.accentText)),
        danger: css(_colorCSS(euiTheme.colors.dangerText)),
        warning: css(_colorCSS(euiTheme.colors.warningText)),
        ghost: css(_colorCSS(euiTheme.colors.ghost)),
        text: css(_colorCSS(euiTheme.colors.text)),

        // Children
        euiLink__screenReaderText: css`
      ${logicalCSS('left', '0px')}
    `,
        euiLink__externalIcon: css`
      ${logicalCSS('margin-left', euiTheme.size.xs)}
    `,
    };
};