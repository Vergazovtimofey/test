/*
import chroma from 'chroma-js';
import { ColorStop } from '../../components/color_picker/color_stops';

export const getSteppedGradient = function (
    colors: ColorStop[],
    steps: number
) {
    const range = colors[colors.length - 1].stop - colors[0].stop;
    const offset = colors[0].stop;
    const finalStops = [...colors.map((item) => (item.stop - offset) / range)];
    const color = [...colors.map((item) => item.color)];
    return chroma.scale(color).domain(finalStops).colors(steps);
};
*/
