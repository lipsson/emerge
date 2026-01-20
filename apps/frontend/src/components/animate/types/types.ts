import type { BoxProps } from "@mui/material/Box";
import type { Easing } from "framer-motion";

export type AnimateLogoProps = BoxProps & {
  logo?: React.ReactNode;
};

export type VariantsType = {
  distance?: number;
  durationIn?: number;
  durationOut?: number;
  easeIn?: Easing;
  easeOut?: Easing;
};

export type TranHoverType = {
  duration?: number;
  ease?: Easing;
};

export type TranEnterType = {
  durationIn?: number;
  easeIn?: Easing;
};

export type TranExitType = {
  durationOut?: number;
  easeOut?: Easing;
};

export type BackgroundType = {
  colors?: string[];
  duration?: number;
  ease?: Easing;
};
