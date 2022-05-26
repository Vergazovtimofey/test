export const sizeToPixel = (scale: number = 1) => (
    themeOrBase: number | { base: number; [key: string]: any }
) => {
    const base = typeof themeOrBase === 'object' ? themeOrBase.base : themeOrBase;
    return `${base * scale}px`;
};
