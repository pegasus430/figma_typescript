import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  thead{
    font-weight: 700;
    font-size: 10px;
    line-height: 30px;
    text-align: left;
    text-transform: uppercase;
  };
  td {
    border-top: 1px solid #EDEDED;
  };
`;

export const StyledTH = styled.th<{ maxWidth?: number, removePaddingRight?: boolean; }>`
  ${({ maxWidth }) => maxWidth && 'max-width: ' + maxWidth + "px;"}
  padding-right: ${({ removePaddingRight }) => removePaddingRight ? "0px" : "60px"};
`;

export const StyledTD = styled.td<{ maxWidth?: number, removePaddingRight?: boolean; }>`
  ${({ maxWidth }) => maxWidth && 'max-width: ' + maxWidth + "px;"}
  padding-right: ${({ removePaddingRight }) => removePaddingRight ? "0px" : "60px"};
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const TicketTitle = styled.div`
  font-size: 15px;
  color: #286EF1;
  line-height: 30px;
`;

export const TypographyText = styled.div`
  font-size: 13px;
  color: #555555;
  line-height: 30px;
`;

export const ForumTitle = styled.div`
  font-size: 13px;
  color: #555555;
  line-height: 20px;
`;

export const Avatar = styled.div`
  padding-right: 10px;
  img {
    border-radius: 50%;
    height: 25px;
  }
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StaffContainer = styled.div`
  display: flex;
  margin-left: auto;
  .staff-badge {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export const ReplyCountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  .badge {
    ::before {
      display: block;
      width: 0px;
      height: 0px;
      border-right: 3px solid #EDEDED;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      content: '';
    }
  }
  span {
    padding: 4px 5px;
    background-color: #EDEDED;
    font-size: 11px;
    color: #333333;
    font-weight: 700;
  }
`;
