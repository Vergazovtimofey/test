const log: { [id: string]: boolean } = {};

export const warnOnce = (id: string, message: string) => {
    if (!log[id] && console && console.warn) {
        log[id] = true;
        console.warn(message);
    }
};