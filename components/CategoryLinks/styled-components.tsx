"use client";

import { mediaQueries, pxToRem } from "@/lib";
import styled from "styled-components";

export const CategoryLinksContainer = styled.div`
  --links-container-margin-top: 6rem;
  --links-container-flex-direction: column;
  --links-container-gap: 7rem;
  --links-container-padding: 0 1.5rem;

  margin-top: var(--links-container-margin-top);
  padding: var(--links-container-padding);
  display: flex;
  flex-direction: var(--links-container-flex-direction);
  gap: var(--links-container-gap);

  @media ${mediaQueries.mdAndUp} {
    --links-container-margin-top: 7rem;
    --links-container-flex-direction: row;
    --links-container-gap: 1rem;
    --links-container-padding: 0 2rem;
  }

  @media ${mediaQueries.lgAndUp} {
    --links-container-margin-top: 8rem;
    --links-container-gap: 2rem;
    --links-container-padding: 0 13rem;
  }
`;

export const CategoryLinkContainer = styled.div`
  background-color: var(--color-light-grey);
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;

  & img {
    margin-top: -4rem;
  }

  & .category-name {
    margin-top: -0.5rem;
    display: flex;
    flex-direction: column;
    letter-spacing: ${pxToRem(1.07)};
    font-weight: bold;
    text-transform: uppercase;
  }

  & .category-link {
    margin: 1rem 0;
    text-transform: uppercase;
    letter-spacing: ${pxToRem(1)};
    font-size: ${pxToRem(13)};
    text-decoration: none;
    color: var(--color-grey);
  }
`;
