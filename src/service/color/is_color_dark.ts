export function isColorDark(red: number, green: number, blue: number): boolean {
    const [r, g, b] = [red, green, blue]
        .map((c) => c / 255.0)
        .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance <= 0.179;
}