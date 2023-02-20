import styled from "styled-components";
import { variant } from "styled-system";
import { styleVariants } from "./theme";
import { variants } from "./types";

export type Variant = typeof variants[keyof typeof variants];

export const Badge = styled.div<{ type: string, variant?: Variant | string; }>`
  padding-left: 3px;
  padding-right: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: ${({ type }) => type === "circle" ? "20px" : "auto"};
  border-radius: ${({ type }) => type === "circle" ? "50%" : "14px"};
  ${variant({
  variants: styleVariants,
})}
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  img {
    margin-right: 3px;
  }
`;
