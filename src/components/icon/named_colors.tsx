export const colorToClassMap = {
    default: null,
    primary: 'euiIcon--primary',
    success: 'euiIcon--success',
    accent: 'euiIcon--accent',
    warning: 'euiIcon--warning',
    danger: 'euiIcon--danger',
    text: 'euiIcon--text',
    subdued: 'euiIcon--subdued',
    ghost: 'euiIcon--ghost',
    inherit: 'euiIcon--inherit',
};

export type NamedColor = keyof typeof colorToClassMap;

export function isNamedColor(name: string): name is NamedColor {
    return colorToClassMap.hasOwnProperty(name);
}