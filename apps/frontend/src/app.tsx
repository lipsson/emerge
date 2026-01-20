import { MotionLazy } from "@/components/animate/motion-lazy";
import { ProgressBar } from "@/components/progress-bar";
import { defaultSettings, SettingsProvider } from "@/components/settings";
import { Snackbar } from "@/components/snackbar";
import { I18nProvider, LocalizationProvider } from "@/locales";

import EventsPages from "@/pages/events.pages.tsx";
import { ThemeProvider } from "@/theme/theme-provider";

export default function App() {
  return (
    <I18nProvider>
      <LocalizationProvider>
        <SettingsProvider settings={defaultSettings}>
          <ThemeProvider>
            <MotionLazy>
              <Snackbar />
              <ProgressBar />
              <EventsPages />
            </MotionLazy>
          </ThemeProvider>
        </SettingsProvider>
      </LocalizationProvider>
    </I18nProvider>
  );
}
