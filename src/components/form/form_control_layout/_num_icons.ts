export type _EuiFormControlLayoutNumIcons = {
    icon?: boolean;
    clear?: boolean;
    isLoading?: boolean;
    isInvalid?: boolean;
    isDropdown?: boolean;
};

export function getFormControlClassNameForIconCount({
                                                        icon,
                                                        clear,
                                                        isLoading,
                                                        isInvalid,
                                                        isDropdown,
                                                    }: _EuiFormControlLayoutNumIcons): string | undefined {
    const numIcons = [icon, clear, isInvalid, isLoading, isDropdown].filter(
        (item) => item === true
    ).length;

    // This className is also specifically used in `src/global_styling/mixins/_form.scss`
    return numIcons > 0 ? `euiFormControlLayout--${numIcons}icons` : undefined;
}