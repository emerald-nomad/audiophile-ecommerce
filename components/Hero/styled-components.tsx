"use client";
import { mediaQueries } from "@/lib";
import { pxToRem } from "@/lib/css-helpers";
import styled from "styled-components";

export const HeroWrapper = styled.div`
  --radiel-gradient-position: center;
  --radial-gradient-values: circle, transparent 60%, var(--color-black) 80%;
  --height: 132vw;
  --background-position-y: -22vw;
  --background-image: url("/images/mobile/hero.png");

  position: relative;
  height: var(--height);
  background-color: var(--color-black);
  background-image: var(--background-image);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: var(--background-position-y);
  display: flex;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: radial-gradient(
      at var(--radiel-gradient-position),
      var(--radial-gradient-values)
    );
    background-image: -webkit-radial-gradient(
      var(--radiel-gradient-position),
      var(--radial-gradient-values)
    );
    z-index: 10;
  }

  @media ${mediaQueries.mdAndUp} {
    --height: 83vw;
    --background-image: url("/images/tablet/hero.png");
    --background-position-y: -12vw;
  }

  @media ${mediaQueries.lgAndUp} {
    --height: 44vw;
    --radiel-gradient-position: 67vw 17vw;
    --radial-gradient-values: circle, transparent 0, var(--color-black) 40%;
    --background-position-y: -7vw;
    --background-image: url("/images/desktop/hero.png");
  }
`;

export const HeroContent = styled.div`
  --hero-content-padding-top: 30vw;
  --hero-content-gap: 5vw;
  --hero-content-text-align: center;
  --hero-content-align-items: center;
  --hero-content-link-align-self: center;
  --product-name-font-size: ${pxToRem(26)};
  --product-name-letter-spacing: ${pxToRem(1.29)};
  --product-name-line-height: ${pxToRem(40)};
  --product-name-width: 18rem;
  --product-description-width: 18rem;

  z-index: 20;
  display: flex;
  width: 100%;
  padding-top: var(--hero-content-padding-top);
  text-align: var(--hero-content-text-align);
  align-items: var(--hero-content-align-items);
  gap: var(--hero-content-gap);
  flex-direction: column;

  & .subtext {
    color: var(--color-grey);
    font-size: ${pxToRem(14)};
    letter-spacing: ${pxToRem(10)};
    text-transform: uppercase;
  }

  & .product-name {
    font-weight: bold;
    font-size: var(--product-name-font-size);
    line-height: var(--product-name-line-height);
    letter-spacing: var(--product-name-letter-spacing);
    color: var(--color-white);
    text-transform: uppercase;
    width: var(--product-name-width);
  }

  & .product-description {
    color: var(--color-grey);
    width: var(--product-description-width);
  }

  & a {
    width: fit-content;
    align-self: var(--hero-content-link-align-self);
  }

  @media ${mediaQueries.mdAndUp} {
    --hero-content-padding-top: 18vw;
    --hero-content-gap: 3vw;
    --product-name-font-size: ${pxToRem(56)};
    --product-name-letter-spacing: ${pxToRem(2)};
    --product-name-line-height: ${pxToRem(58)};
    --product-name-width: 30rem;
    --product-description-width: 25rem;
  }

  @media ${mediaQueries.lgAndUp} {
    --hero-content-padding-top: 9vw;
    --hero-content-gap: 1vw;
    --hero-content-text-align: start;
    --hero-content-align-items: initial;
    --hero-content-link-align-self: start;

    padding-left: 15vw;
  }
`;
