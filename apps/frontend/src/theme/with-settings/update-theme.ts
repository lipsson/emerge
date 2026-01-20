import type { SettingsState } from "@/components/settings/drawer/types/types.ts";

import type { ThemeComponents, ThemeUpdateOptions } from "@/types/types.ts";
import type { ColorSystemOptions, Components, Theme } from "@mui/material/styles";

import COLORS from "../core/colors.json";
import { components as coreComponents } from "../core/components";
import { createShadowColor, customShadows as coreCustomShadows } from "../core/custom-shadows";
import { grey as coreGreyPalette, primary as corePrimaryPalette } from "../core/palette";
import { createPaletteChannel, hexToRgbChannel } from "../styles";
import PRIMARY_COLOR from "./primary-color.json";

/**
 * [1] settings @primaryColor
 * [2] settings @contrast
 */

export function updateCoreWithSettings(
  theme: ThemeUpdateOptions,
  settings: SettingsState,
): ThemeUpdateOptions {
  const { colorSchemes, customShadows } = theme;
  const colorSchemesLight = colorSchemes?.light as ColorSystemOptions;
  const colorSchemesDark = colorSchemes?.dark as ColorSystemOptions;
  return {
    ...theme,
    colorSchemes: {
      ...colorSchemes,
      light: {
        palette: {
          ...colorSchemesLight?.palette,
          /** [1] */
          primary: getPalettePrimary(settings.primaryColor),
          /** [2] */
          background: {
            ...colorSchemesLight?.palette?.background,
            default: getBackgroundDefault(settings.contrast),
            defaultChannel: hexToRgbChannel(
              getBackgroundDefault(settings.contrast),
            ),
          },
        },
      },
      dark: {
        palette: {
          ...colorSchemesDark?.palette,
          /** [1] */
          primary: getPalettePrimary(settings.primaryColor),
        },
      },
    },
    customShadows: {
      ...customShadows,
      /** [1] */
      primary:
        settings.primaryColor === "default"
          ? coreCustomShadows("light").primary
          : createShadowColor(
              getPalettePrimary(settings.primaryColor).mainChannel,
            ),
    },
  };
}

export function updateComponentsWithSettings(settings: SettingsState) {
  const components: ThemeComponents = {};

  /** [2] */
  if (settings.contrast === "hight") {
    const MuiCard: Components<Theme>["MuiCard"] = {
      styleOverrides: {
        root: ({ theme, ownerState }) => {
          let rootStyles = {};
          if (
            typeof coreComponents?.MuiCard?.styleOverrides?.root === "function"
          ) {
            rootStyles =
              coreComponents.MuiCard.styleOverrides.root({
                ownerState,
                theme,
              }) ?? {};
          }

          return {
            ...rootStyles,
            boxShadow: theme.customShadows.z1,
          };
        },
      },
    };

    components.MuiCard = MuiCard;
  }

  return { components };
}

const PRIMARY_COLORS = {
  default: COLORS.primary,
  cyan: PRIMARY_COLOR.cyan,
  purple: PRIMARY_COLOR.purple,
  blue: PRIMARY_COLOR.blue,
  orange: PRIMARY_COLOR.orange,
  red: PRIMARY_COLOR.red,
};

function getPalettePrimary(primaryColorName: SettingsState["primaryColor"]) {
  const selectedPrimaryColor = PRIMARY_COLORS[primaryColorName];
  const updatedPrimaryPalette = createPaletteChannel(selectedPrimaryColor);

  return primaryColorName === "default"
    ? corePrimaryPalette
    : updatedPrimaryPalette;
}

function getBackgroundDefault(contrast: SettingsState["contrast"]) {
  /** [2] */
  return contrast === "default" ? "#FFFFFF" : coreGreyPalette[200];
}
