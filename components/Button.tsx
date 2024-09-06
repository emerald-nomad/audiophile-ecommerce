"use client";

import { pxToRem } from "@/lib/css-helpers";
import styled, { css } from "styled-components";

export const Button = styled.button<{ type: "filled" | "outline" | "clear" }>`
  background-color: var(--color-white);
  font-size: ${pxToRem(13)};
  font-weight: bold;
  letter-spacing: ${pxToRem(1)};
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  padding: 1rem 2.5rem;
  transition: 0.3s;

  ${(props) =>
    props.type === "filled" &&
    css`
      background-color: var(--color-pumpkin);
      color: var(--color-white);
    `}

  ${(props) =>
    props.type === "outline" &&
    css`
      border: var(--color-black) 1px solid;
    `}

  ${(props) =>
    props.type === "clear" &&
    css`
      color: var(--color-off-black);
    `}

  &:hover {
    ${(props) =>
      props.type === "filled" &&
      css`
        background-color: var(--color-peach);
      `}

    ${(props) =>
      props.type === "outline" &&
      css`
        background-color: var(--color-black);
        color: var(--color-white);
      `}
      
    ${(props) =>
      props.type === "clear" &&
      css`
        color: var(--color-pumpkin);
      `}
  }
`;
