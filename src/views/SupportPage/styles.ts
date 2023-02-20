import styled from "styled-components";

export const CardTitle = styled.span`
  font-size: 15px;
  font-weight: 700;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  margin-top: 10px;
  line-height: 35px;
`;

export const CardHeaderText = styled.span`
  font-weight: 500;
  font-size: 13px;
  line-height: 30px;
  display: flex;
  align-items: center;
`;

export const TypographyText = styled.span`
  font-weight: 400;
  font-size: 15px;
  color: #555555;
  line-height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TypographySmall = styled.span`
  font-size: 11px;
  line-height: 11px;
  margin-right: 5px;
`;

export const SupportPageContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const SupportResourceContainer = styled.div`
  margin-top: 30px;
`;

export const ActionGroup = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const StartIcon = styled.img`
  margin-right: 5px;
`;

export const TicketsContainer = styled.div`
  margin-top: 30px;
`;

export const HelpButton = styled.button`
  position: absolute;
  bottom: 25px;
  right: 30px;
  border-radius: 17.5px;
  height: 35px;
  width: 83px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover:not(:disabled):not(.app-button--disabled):not(.app-button--disabled):not(:active) {
    opacity: 0.85;
  }

  &:active:not(:disabled):not(.app-button--disabled):not(.app-button--disabled) {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
  img {
    margin-right: 5px;
  }
`;
