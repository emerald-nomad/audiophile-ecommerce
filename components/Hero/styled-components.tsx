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
    --radial-gradient-values: circle, transparent 0, var(--color-black) 45%;
    --background-position-y: -7vw;
    --background-image: url("/images/desktop/hero.png");
  }
`;

export const HeroContent = styled.div`
  z-index: 20;
  display: flex;
  width: 100%;
  padding: 6.5rem 2rem;
  text-align: center;
  gap: 1.25rem;
  flex-direction: column;

  & .overline {
    color: var(--color-grey);
  }

  & .product-name {
    font-weight: bold;
    font-size: ${pxToRem(26)};
    line-height: ${pxToRem(40)};
    letter-spacing: ${pxToRem(1.29)};
    color: var(--color-white);
    text-transform: uppercase;
  }

  & .product-description {
    color: var(--color-grey);
  }

  & a {
    width: fit-content;
    align-self: center;
  }
`;
