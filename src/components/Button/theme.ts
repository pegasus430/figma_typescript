import { scales, variants } from "components/Button/types";
// ---------------------------------------------------------------
export const scaleVariants = {
  [scales.LG]: {
    height: "56px",
    padding: "0 24px",
  },
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "40px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "#286efa",
    color: "white",
    ":disabled": {
      color: "#bdbdbd",
      backgroundColor: "#EDEDED",
    },
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "#555555",
    fontWeight: 400,
    fontSize: "13px",
    boxShadow: "none",
  },
};
