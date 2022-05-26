

import { useEuiI18n } from '../i18n';

export const useLoadingAriaLabel = (): string => {
    return useEuiI18n('euiLoadingStrings.ariaLabel', 'Loading');
};