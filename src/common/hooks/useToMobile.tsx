import React from "react";
import { useMediaQuery } from "react-responsive";
import variables from "@styles/responsive.module.scss";

export const useToMobile = () => {
  return useMediaQuery({
    maxWidth: variables["breakpoint-device-mobile"],
  });
};
