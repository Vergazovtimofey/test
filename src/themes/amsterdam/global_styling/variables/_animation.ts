import {
    _EuiThemeAnimationSpeeds,
    _EuiThemeAnimationEasings,
    _EuiThemeAnimation,
} from '../../../../global_styling/variables/animations';

export const animation_speed: _EuiThemeAnimationSpeeds = {
    extraFast: '90ms',
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    extraSlow: '500ms',
};

export const animation_ease: _EuiThemeAnimationEasings = {
    bounce: 'cubic-bezier(.34, 1.61, .7, 1)',
    resistance: 'cubic-bezier(.694, .0482, .335, 1)',
};

export const animation: _EuiThemeAnimation = {
    ...animation_speed,
    ...animation_ease,
};