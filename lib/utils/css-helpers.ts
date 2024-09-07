export const DEFAULT_FONT_SIZE_IN_PX = 15;

export function pxToRem(px: number) {
  return `calc(${px} / 16 * 1rem)`;
}
