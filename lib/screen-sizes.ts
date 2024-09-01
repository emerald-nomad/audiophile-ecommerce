export const screenSizes = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const mediaQueries = {
  mdAndUp: `(min-width: ${screenSizes.md / 16}rem)`,
  lgAndUp: `(min-width: ${screenSizes.lg / 16}rem)`,
  xlAndUp: `(min-width: ${screenSizes.xl / 16}rem)`,
};
