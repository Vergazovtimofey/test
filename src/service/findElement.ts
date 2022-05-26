export type ElementTarget = HTMLElement | string | (() => HTMLElement);

export const findElementBySelectorOrRef = (elementTarget?: ElementTarget) => {
    let node = elementTarget instanceof HTMLElement ? elementTarget : null;
    if (typeof elementTarget === 'string') {
        node = document.querySelector(elementTarget as string);
    } else if (typeof elementTarget === 'function') {
        node = (elementTarget as () => HTMLElement)();
    }
    return node;
};