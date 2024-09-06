"use client";

import { mediaQueries } from "@/lib";
import { pxToRem } from "@/lib/css-helpers";
import styled, { createGlobalStyle } from "styled-components";

export const MobileNavStyles = createGlobalStyle`
    #mobile-nav {
        top: 4.8rem !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0;
        background-color: rgba(0, 0, 0, .25);
    }
`;

export const HeaderWrapper = styled.header`
  background-color: var(--color-black);
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 1.25rem;
  border-bottom: var(--color-off-black) 1px solid;

  @media ${mediaQueries.mdAndUp} {
    padding: 1.5rem 0;
    margin: 0 2rem;
  }

  @media ${mediaQueries.lgAndUp} {
    justify-content: space-between;
    margin: 0 15vw;
  }
`;

export const HamburgerIconWrapper = styled.div`
  cursor: pointer;
  display: flex;

  & button {
    background-color: var(--color-black);
    border: none;
  }

  @media ${mediaQueries.lgAndUp} {
    display: none;
  }
`;

export const MenuItemsWrapper = styled.ul`
  background-color: var(--color-white);
`;

export const LogoIconWrapper = styled.div`
  display: flex;
  margin: auto;

  @media ${mediaQueries.mdAndUp} {
    margin-left: 3rem;
  }

  @media ${mediaQueries.lgAndUp} {
    margin: 0;
    flex: 1;
  }
`;

export const NavigationWrapper = styled.nav`
  display: none;

  @media ${mediaQueries.lgAndUp} {
    display: flex;
    gap: 2.75rem;
    flex: 1;
    justify-content: center;

    & a {
      transition: 0.3s;
      color: var(--color-white);
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${pxToRem(13)};
      line-height: ${pxToRem(25)};
      letter-spacing: ${pxToRem(2)};

      &:hover {
        color: var(--color-pumpkin);
      }
    }
  }
`;

export const CartIconWrapper = styled.div`
  display: flex;
  cursor: pointer;

  @media ${mediaQueries.lgAndUp} {
    justify-content: end;
    flex: 1;
  }
`;
