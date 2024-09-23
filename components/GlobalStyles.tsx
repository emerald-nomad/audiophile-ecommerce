"use client";

import { DEFAULT_FONT_SIZE_IN_PX, pxToRem } from "@/lib/utils";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        // COLORS
        --color-pumpkin: hsl(22, 65%, 57%);
        --color-peach: hsl(21, 94%, 75%);
        --color-white: hsl(0, 0%, 100%);
        --color-off-white: hsl(0, 0%, 98%);
        --color-black: hsl(0, 0%, 0%);
        --color-off-black: hsl(0, 0%, 6%);
        --color-grey: #979797;
        --color-light-grey: hsl(0, 0%, 95%);

        font-size: clamp(1rem, 4vw - 2.25rem, 1.25rem);
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        font-family: var(--font-manrope);
    }

    #root, #__next {
        isolation: isolate;
    }

    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6,  
    .sub-title {
        text-transform: uppercase;
        font-weight: bold;
    }

    h1 {
        
        letter-spacing: ${pxToRem(2)};
        line-height: ${pxToRem(58)};
        font-size: ${pxToRem(56)};
    }

    h2 {
        font-size: ${pxToRem(40)};
        line-height: ${pxToRem(44)};
        letter-spacing: ${pxToRem(1.5)};
    }

    h3 {
        font-size: ${pxToRem(32)};
        line-height: ${pxToRem(36)};
        letter-spacing: ${pxToRem(1.15)};
    }

    h4 {
        font-size: ${pxToRem(28)};
        line-height: ${pxToRem(38)};
        letter-spacing: ${pxToRem(2)};
    }

    h5 {
        font-size: ${pxToRem(24)};
        line-height: ${pxToRem(33)};
        letter-spacing: ${pxToRem(1.7)};
    }

    h6 {
        font-size: ${pxToRem(18)};
        line-height: ${pxToRem(24)};
        letter-spacing: ${pxToRem(1.3)};
    }

    .overline, 
    .sub-title {
        color: var(--color-pumpkin);
    }

    .overline {
        text-transform: uppercase;
        font-size: ${pxToRem(14)};
        line-height: ${pxToRem(19)};
        letter-spacing: ${pxToRem(10)};
    }

    .sub-title {
        font-size: ${pxToRem(13)};
        line-height: ${pxToRem(25)};
        letter-spacing: ${pxToRem(1)};
    }

    body {
        
        line-height: ${pxToRem(25)};
        font-weight: 500;
    }

    a {
        text-decoration: none;
    }
`;
