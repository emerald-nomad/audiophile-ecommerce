import { pxToRem } from "./css-helpers";

export const screenSizes = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const mediaQueries = {
  mdAndUp: `(min-width: ${pxToRem(screenSizes.md)})`,
  lgAndUp: `(min-width: ${pxToRem(screenSizes.lg)})`,
  xlAndUp: `(min-width: ${pxToRem(screenSizes.xl)})`,
};
