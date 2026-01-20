import { Icon } from "@iconify/react";

import Box from "@mui/material/Box";
import NoSsr from "@mui/material/NoSsr";
import { forwardRef } from "react";

import { iconifyClasses } from "./styles/classes.ts";

import type { IconifyProps } from "./types/types.ts";

export const Iconify = forwardRef<SVGElement, IconifyProps>(
  ({ className, width = 20, sx, ...other }, ref) => {
    const baseStyles = {
      width,
      height: width,
      flexShrink: 0,
      display: "inline-flex",
    };

    const renderFallback = (
      <Box
        ref={ref}
        component="span"
        className={iconifyClasses.root.concat(className ? ` ${className}` : "")}
        sx={{ ...baseStyles, ...sx }}
      />
    );

    return (
      <NoSsr fallback={renderFallback}>
        <Box
          ref={ref}
          component={Icon}
          className={iconifyClasses.root.concat(
            className ? ` ${className}` : "",
          )}
          sx={{ ...baseStyles, ...sx }}
          {...other}
        />
      </NoSsr>
    );
  },
);
Iconify.displayName = "Iconify";
