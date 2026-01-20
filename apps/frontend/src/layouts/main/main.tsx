import { layoutClasses } from "@/layouts/styles/classes.ts";
import type { BoxProps } from "@mui/material/Box";
import Box from "@mui/material/Box";

export function Main({ children, sx, ...other }: BoxProps) {
  return (
    <Box
      component="main"
      className={layoutClasses.main}
      sx={{
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
