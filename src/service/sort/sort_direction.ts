import * as PropTypes from 'prop-types';

const ASC = 'asc' as const;
const DESC = 'desc' as const;

export type Direction = typeof ASC | typeof DESC;

export const SortDirection = Object.freeze({
    ASC,
    DESC,
    isAsc(direction: Direction) {
        return direction === ASC;
    },
    reverse(direction: Direction) {
        return this.isAsc(direction) ? DESC : ASC;
    },
});

export const SortDirectionType = PropTypes.oneOf([ASC, DESC]);