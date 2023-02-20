import React, { ReactNode } from "react";
import { TiTimes } from "react-icons/ti";

import {
  InputContainer,
  InputWrapper,
  InputTitle,
  InputItem,
  ErrorMessage,
  TipMessage,
  IconWrapper,
  FollowIconWrapper,
} from "./styles";

interface InputProps {
  value?: string;
  title?: string;
  autocomplete?: string;
  tipMessage?: string;
  errorMessage?: string;
  icon?: null | ReactNode;
  onChange?: (val: string) => any;
  onClear?: () => any;
  width?: number,
  [key: string]: any;
}

const Input: React.FC<InputProps> = ({
  title = "",
  value = "",
  tipMessage = "",
  errorMessage = "",
  icon = null,
  onChange = (e) => e,
  onClear = (e) => e,
  width,
  ...props
}) => (
  <InputContainer width={width}>
    <InputWrapper hasError={!!errorMessage}>
      {title && (
        <InputTitle
          className="input_title"
          hasValue={!!value}
          hasError={!!errorMessage}
        >
          {title}
        </InputTitle>
      )}
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <InputItem
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        {...props}
      />
      {value && <FollowIconWrapper onClick={onClear}> <TiTimes /> </FollowIconWrapper>}
    </InputWrapper>
    {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    {!errorMessage && tipMessage && <TipMessage>{tipMessage}</TipMessage>}
  </InputContainer>
);

export default Input;
