import { Flex } from "components/Layout/Box";
import styled, { css } from "styled-components";
import { InputItemStyledProps } from "./types";

export const InputContainer = styled.div<{ width?: number; }>`
  flex-direction: column;
  background: #F2F2F2;
  border-radius: 23px;
  min-width: ${({ width }) => width ? width : 270}px;
`;

export const InputWrapper = styled.div<InputItemStyledProps>`
  display: flex;
  position: relative;
  border: 1px solid;
  border-color: ${({ hasError }) => (hasError ? "#F53C3C" : "#e3dfdf73")};
  border-radius: 23px;
  padding: 1px;
  :focus-within {
    border-color: ${({ hasError }) => (hasError ? "#F53C3C" : "#88affd")};
    background: #FFFFFF;
    .input_title {
      left: 5px;
      transform: translate(13px, -11px) scale(0.9);
      color: ${({ hasError }) => (hasError ? "#F53C3C" : "#bdbdbd")};
      background-color: #f9f9f9;
    }
  }
`;

export const InputItem = styled.input`
  flex: 1;
  font-size: 15px;
  border: none;
  padding: 12px 10px;
  line-height: 1.2;
  color: black;
  background: transparent;
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #f9f9f9 inset;
  }
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #555555;
    opacity: 1; /* Firefox */
  }
`;

export const InputTitle = styled.p<{ hasValue: boolean; hasError: boolean; }>`
  position: absolute;
  top: 0;
  left: 5px;
  padding: 0 5px;
  pointer-events: none;
  transform: translate(13px, 12px);
  color: #686767;
  font-size: 15px;
  font-weight: light;
  background: #f9f9f9;
  border-radius: 2px;

  ${({ hasValue }) =>
    hasValue &&
    css`
      background-color: #f9f9f9;
      left: 5px;
      transform: translate(13px, -11px) scale(0.9);
    `}

  color: ${({ hasError }) => (hasError ? "#F53C3C" : "#bdbdbd")};

  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`;

export const ErrorMessage = styled.p`
  font-size: 14px;
  padding: 8px 0;
  color: #f53c3c;
`;

export const TipMessage = styled.p`
  font-size: 14px;
  padding: 8px 0;
  color: #686767;
`;

export const IconWrapper = styled(Flex)`
  padding-left: 20px;
  align-items: center;
  justify-content: center;
  svg {
    cursor: pointer;
  }
`;

export const FollowIconWrapper = styled(Flex)`
  padding-right: 16px;
  align-items: center;
  justify-content: center;
  svg {
    cursor: pointer;
  }
`;
