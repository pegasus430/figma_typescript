import styled, { css } from "styled-components";
import { space, layout, variant } from "styled-system";
// types
import { BaseButtonProps } from "components/Button/types";

import { scaleVariants, styleVariants } from "./theme";

// theme: DefaultTheme; @tofix
interface ThemedButtonProps extends BaseButtonProps {
  theme: any;
}

interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean;
}

const getDisabledStyles = ({ $isLoading }: TransientButtonProps) => {
  if ($isLoading === true) {
    return `
      &:disabled,
      &.app-button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.app-button--disabled {
      border:none;
      box-shadow: none;
      color:  red;
      cursor: not-allowed;
      p {
        color:  red;
      }
    }
  `;
};

/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */

const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
  return $isLoading ? ".5" : "1";
};

const StyledButton = styled.button<BaseButtonProps>`
  position: relative;
  align-items: center;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: ${getOpacity};
  outline: 0;
  transition: background-color 0.2s, opacity 0.2s;

  &:hover:not(:disabled):not(.app-button--disabled):not(.app-button--disabled):not(:active) {
    opacity: 0.65;
  }

  &:active:not(:disabled):not(.app-button--disabled):not(.app-button--disabled) {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }

  ${getDisabledStyles}
  ${variant({
  prop: "scale",
  variants: scaleVariants,
})}
  ${variant({
  variants: styleVariants,
})}
  ${layout}
  ${space}
  ${({ decorator, theme }) =>
    decorator &&
    css`
      &::before {
        content: "${decorator.text}";
        position: absolute;
        border-bottom: 20px solid
          ${decorator.backgroundColor ?? theme.colors.secondary};
        border-left: 34px solid transparent;
        border-right: 12px solid transparent;
        height: 0;
        top: -1px;
        right: -12px;
        width: 75px;
        text-align: center;
        padding-right: 30px;
        line-height: 20px;
        font-size: 12px;
        font-weight: 400;
        transform: rotate(31.17deg);
        color: ${decorator.color ?? "white"};
      }
    `}
`;

export default StyledButton;
