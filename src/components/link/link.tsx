
import  {
    forwardRef,
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    MouseEventHandler,
    Ref
} from 'react';
import classNames from 'classnames';
import {  useEuiTheme } from '../../service';
import { getSecureRelForTarget } from '../../service';
import { euiLinkStyles } from './link.styles';
import { EuiIcon } from '../icon';
import { EuiI18n, useEuiI18n } from '../i18n';
import { CommonProps, ExclusiveUnion } from '../common';
import { EuiScreenReaderOnly } from '../accessibility';
import { validateHref } from '../../service/security/href_validator';

export type EuiLinkType = 'button' | 'reset' | 'submit';

export const COLORS = [
    'primary',
    'subdued',
    'success',
    'accent',
    'danger',
    'warning',
    'text',
    'ghost',
] as const;

export type EuiLinkColor = typeof COLORS[number];

export interface LinkButtonProps {
    type?: EuiLinkType;
    /**
     * Any of our named colors.
     */
    color?: EuiLinkColor;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface EuiLinkButtonProps
    extends CommonProps,
        Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'color' | 'onClick'>,
        LinkButtonProps {}

export interface LinkAnchorProps {
    type?: EuiLinkType;
    /**
     * Any of our named colors.
     */
    color?: EuiLinkColor;
    /**
     * Set to true to show an icon indicating that it is an external link;
     * Defaults to true if `target="_blank"`
     */
    external?: boolean;
}

export interface EuiLinkAnchorProps
    extends CommonProps,
        Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'type' | 'color' | 'onClick'>,
        LinkAnchorProps {
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export type EuiLinkProps = ExclusiveUnion<
    EuiLinkButtonProps,
    EuiLinkAnchorProps
    >;

const EuiLink = forwardRef<HTMLAnchorElement | HTMLButtonElement, EuiLinkProps>(
    (
        {
            children,
            color = 'primary',
            className,
            href,
            external,
            target,
            rel,
            type = 'button',
            onClick,
            disabled: _disabled,
            ...rest
        },
        ref
    ) => {
        const euiTheme = useEuiTheme();
        const styles = euiLinkStyles(euiTheme);
        const cssStyles = [styles.euiLink];
        const cssScreenReaderTextStyles = [styles.euiLink__screenReaderText];
        const cssExternalLinkIconStyles = [styles.euiLink__externalIcon];

        const isHrefValid = !href || validateHref(href);
        const disabled = _disabled || !isHrefValid;

        const newTargetScreenReaderText = (
            <EuiScreenReaderOnly /*css={cssScreenReaderTextStyles}*/  >
        <span>
          <EuiI18n
              token="euiLink.newTarget.screenReaderOnlyText"
              default="(opens in a new tab or window)"
          />
        </span>
            </EuiScreenReaderOnly>
        );

        const externalLinkIcon = (
            <EuiIcon
                aria-label={useEuiI18n('euiLink.external.ariaLabel', 'External link')}
                size="s"
               /* css={cssExternalLinkIconStyles}*/
                type="popout"
            />
        );

        if (href === undefined || !isHrefValid) {
            const buttonProps = {
                className: classNames('euiLink', className),
                css: [cssStyles, disabled ? [styles.disabled] : styles[color]],
                type,
                onClick,
                disabled,
                ...rest,
            };

            return (
                <button
                    ref={ref as Ref<HTMLButtonElement>}
                    {...(buttonProps as EuiLinkButtonProps)}
                >
                    {children}
                </button>
            );
        }

        const secureRel = getSecureRelForTarget({ href, target, rel });

        const anchorProps = {
            className: classNames('euiLink', className),
            css: [cssStyles, styles[color]],
            href,
            target,
            rel: secureRel,
            onClick,
            ...rest,
        };
        const showExternalLinkIcon =
            (target === '_blank' && external !== false) || external === true;

        return (
            <a
                ref={ref as React.Ref<HTMLAnchorElement>}
                {...(anchorProps as EuiLinkAnchorProps)}
            >
                {children}
                {showExternalLinkIcon && externalLinkIcon}
                {target === '_blank' && newTargetScreenReaderText}
            </a>
        );
    }
);

EuiLink.displayName = 'EuiLink';
export { EuiLink };