import React, { FC, ReactNode } from "react";
import { Link as ReactLink } from "react-router-dom";
import styled from "styled-components";

const LinkWrapper = styled.span`
  cursor: pointer;
  font-weight: 600;
  color: #286efa;
  display: flex;
  align-items: center;
  :hover {
    opacity: 0.95;
  }
  :active {
    opacity: 1;
  }
`;

type LinkProps = {
  path?: string;
  children?: ReactNode;
  external?: boolean;
};

const Link: FC<LinkProps> = ({ path = "#", children, external = false }) => {
  return (
    <>
      {
        external ?
          <a href={path} target="_blank" rel="noreferrer">
            <LinkWrapper>{children}</LinkWrapper>
          </a>
          :
          <ReactLink to={path}>
            <LinkWrapper>{children}</LinkWrapper>
          </ReactLink>
      }
    </>
  );
};

export default Link;
