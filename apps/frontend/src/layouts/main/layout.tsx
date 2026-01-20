import { useBoolean } from "@/hooks/use-boolean.ts";

import Alert from "@mui/material/Alert";
import type { Breakpoint, SxProps, Theme } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { navData as mainNavData } from "../config-nav-main";
import { HeaderBase } from "../core/header-base";
import { LayoutSection } from "../core/layout-section";

import { Main } from "./main";
import { NavDesktop } from "./nav/desktop";

import type { NavMainProps } from "./nav/types";

export type MainLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  data?: {
    nav?: NavMainProps["data"];
  };
};

export function MainLayout({ sx, data, children }: MainLayoutProps) {
  const theme = useTheme();

  const mobileNavOpen = useBoolean();

  const layoutQuery: Breakpoint = "md";

  const navData = data?.nav ?? mainNavData;

  return (
    <>
      <LayoutSection
        /** **************************************
         * Header
         *************************************** */
        headerSection={
          <HeaderBase
            layoutQuery={layoutQuery}
            onOpenNav={mobileNavOpen.onTrue}
            slotsDisplay={{
              settings: false,
              localization: false,
              menuButton: false,
            }}
            slots={{
              topArea: (
                <Alert
                  severity="info"
                  sx={{ display: "none", borderRadius: 0 }}
                >
                  This is an info Alert.
                </Alert>
              ),
              rightAreaStart: (
                <NavDesktop
                  data={navData}
                  sx={{
                    display: "none",
                    [theme.breakpoints.up(layoutQuery)]: {
                      mr: 2.5,
                      display: "flex",
                    },
                  }}
                />
              ),
            }}
          />
        }
        /** **************************************
         * Style
         *************************************** */
        sx={sx}
      >
        <Main>{children}</Main>
      </LayoutSection>
    </>
  );
}
