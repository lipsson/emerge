import { useSettingsContext } from "@/components/settings";
import { useTranslate } from "@/locales";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

import { createTheme } from "./create-theme";

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const { currentLang } = useTranslate();

  const settings = useSettingsContext();

  const theme = createTheme(currentLang?.systemValue, settings);

  return (
    <MuiThemeProvider theme={theme} disableTransitionOnChange>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
