import styled from "styled-components";

export const PageinationContainer = styled.div`
  margin-top: 30px;
  color: #555555;
  font-size: 12px;
  font-weight: 700;
  display: flex;
`;

export const PageNumberContainer = styled.div`
  display: flex;
  padding: 0px 30px;
  align-items: center;
  .active {
    background-color: black;
    border-radius: 50%;
    color: white;
  }
`;

export const PageNumber = styled.div`
  width: 25px;
  height: 25px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
  cursor: pointer;
`;

export const PaginationAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  .disabled {
    background-color: transparent;
    border: none;
  }
`;

export const TotalCount = styled.span`
  padding: 0px 6px;
`;

export const ActionButton = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid #EDEDED;
  border-radius: 3px;
  margin-left: 6px;
  cursor: pointer;
`;
