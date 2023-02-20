import React, { ReactElement } from "react";
import { useLayer } from "react-laag";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

import Menu from "./Menu";

type Props = {
  children: ReactElement;
  content: ReactElement;
  isOpen: boolean;
  trigger: (state: boolean) => any;
};

export const PopoverContent = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  .badge {
    margin-left: 10px;
  }
`;

export const PopoverIcon = styled.div`
  margin-left: 6px;
  margin-right: 6px;
`;

export function Popover({ content, children, isOpen, trigger }: Props) {

  const {
    triggerProps,
    layerProps,
    layerSide,
    renderLayer
  } = useLayer({
    isOpen: isOpen,
    placement: "bottom-center",
    triggerOffset: -40,
    onOutsideClick: () => {
      trigger(false);
    }
  });


  return (
    <div onClick={() => trigger(!isOpen)}>
      <div {...triggerProps}>
        {children}
      </div>
      {isOpen &&
        renderLayer(
          <AnimatePresence>
            <Menu className="tooltip"  {...layerProps} layerSide={layerSide}>
              {content}
            </Menu>
          </AnimatePresence>
        )}
    </ div>
  );
}