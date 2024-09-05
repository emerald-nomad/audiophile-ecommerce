"use client";
import { mediaQueries } from "@/lib";
import styled from "styled-components";

export const HeroWrapper = styled.div`
  height: 34rem;
  background-color: var(--color-black);
  background-image: url("/images/mobile/hero.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 -6rem;
  display: flex;

  @media ${mediaQueries.mdAndUp} {
    height: 43rem;
    background-image: url("/images/tablet/hero.png");
  }

  @media ${mediaQueries.lgAndUp} {
    height: 52rem;
    background-position: 0 -11rem;
    background-image: url("/images/desktop/hero.png");
    position: relative;
    &::before {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: radial-gradient(
        at 67.25% 45%,
        circle,
        transparent 0,
        var(--color-black) 50%
      );
      background-image: -webkit-radial-gradient(
        67.25% 45%,
        circle,
        transparent,
        var(--color-black) 32%
      );
      z-index: 10;
    }
  }
`;

export const HeroContent = styled.div`
  z-index: 20;
  color: red;
`;
