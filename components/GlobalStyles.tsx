"use client";

import { DEFAULT_FONT_SIZE_IN_PX, pxToRem } from "@/lib/css-helpers";
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
        --color-grey: hsl(0, 0%, 95%);

        
        font-size: ${DEFAULT_FONT_SIZE_IN_PX}px;
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
        
        letter-spacing: ${pxToRem(2)}rem;
        line-height: ${pxToRem(58)}rem;
        font-size: ${pxToRem(56)}rem;
    }

    h2 {
        font-size: ${pxToRem(40)}rem;
        line-height: ${pxToRem(44)}rem;
        letter-spacing: ${pxToRem(1.5)}rem;
    }

    h3 {
        font-size: ${pxToRem(32)}rem;
        line-height: ${pxToRem(36)}rem;
        letter-spacing: ${pxToRem(1.15)}rem;
    }

    h4 {
        font-size: ${pxToRem(28)}rem;
        line-height: ${pxToRem(38)}rem;
        letter-spacing: ${pxToRem(2)}rem;
    }

    h5 {
        font-size: ${pxToRem(24)}rem;
        line-height: ${pxToRem(33)}rem;
        letter-spacing: ${pxToRem(1.7)}rem;
    }

    h6 {
        font-size: ${pxToRem(18)}rem;
        line-height: ${pxToRem(24)}rem;
        letter-spacing: ${pxToRem(1.3)}rem;
    }

    .overline, 
    .sub-title {
        color: var(--color-pumpkin);
    }

    .overline {
        text-transform: uppercase;
        font-size: ${pxToRem(14)}rem;
        line-height: ${pxToRem(19)}rem;
        letter-spacing: ${pxToRem(10)}rem;
    }

    .sub-title {
        font-size: ${pxToRem(13)}rem;
        line-height: ${pxToRem(25)}rem;
        letter-spacing: ${pxToRem(1)}rem;
    }

    body {
        font-size: 1rem;
        line-height: ${pxToRem(25)}rem;
        font-weight: 500;
    }
`;
