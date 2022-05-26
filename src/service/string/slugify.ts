export function slugify(str: string): string {
    // Calculate the number of initials to show, maxing out at MAX_INITIALS
    const parts = str
        .toLowerCase()
        .replace(/[-]+/g, ' ')
        .replace(/[^\w^\s]+/g, '')
        .replace(/ +/g, ' ')
        .split(' ');
    return parts.join('-');
}