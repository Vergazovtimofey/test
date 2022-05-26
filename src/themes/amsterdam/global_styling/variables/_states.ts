import { computed } from '../../../../service/theme/utils';
import { _EuiThemeFocus } from '../../../../global_styling/variables/states';
import { sizeToPixel } from '../../../../global_styling/functions/size';

export const focus: _EuiThemeFocus = {
    color: 'currentColor',
    width: computed(sizeToPixel(0.125)),

    // transparency: { LIGHT: 0.9, DARK: 0.7 },
    // backgroundColor: computed(({ colors, focus }) =>
    //   transparentize(colors.primary, focus!.transparency)
    // ),

    // Outline
    // outline: {
    //   outline: computed(({ focus }) => `${focus!.width} solid ${focus!.color}`),
    // },
};