import type {
  CssVarsTheme,
  CssVarsThemeOptions,
  Theme as BaseTheme,
  TypographyVariantsOptions as TypographyOptions,
} from "@mui/material/styles";

export type Theme = Omit<BaseTheme, "palette" | "applyStyles"> & CssVarsTheme;
export type CustomShadows = {
  z1?: string;
  primary: string;
  secondary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
};
export type ThemeUpdateOptions = Omit<CssVarsThemeOptions, "typography"> & {
  typography?: TypographyOptions;
  customShadows?: Partial<CustomShadows>;
};

export type ThemeComponents = CssVarsThemeOptions["components"];

export type ThemeColorScheme = "light" | "dark";

export type ThemeDirection = "ltr" | "rtl";

export type ThemeLocaleComponents = { components: ThemeComponents };
