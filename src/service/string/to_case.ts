export function toSentenceCase(string: string): string {
    // First lowercase all letters
    const lowercase = string.toLowerCase();

    // Then just uppercase the first letter;
    return string.charAt(0).toUpperCase() + lowercase.slice(1);
}