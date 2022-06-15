import { Rect } from './rect';
import { Circle } from './circle';
import { svgParser } from './optionalMixin';

export const fabric = {
  Rect,
  Circle,
  ...(process.env['WITH_SVG_EXPORT'] ? svgParser : {}),
  version: 6.23123,
}

export * from './group';