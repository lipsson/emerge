export type LanguageValue = "en" | "pl";

export const fallbackLng = "pl";
export const languages = ["en", "pl"];
export const defaultNS = "common";
export const cookieName = "i18next";

export function i18nOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    lng,
    fallbackLng,
    ns,
    defaultNS,
    fallbackNS: defaultNS,
    supportedLngs: languages,
  };
}

export const changeLangMessages: Record<
  LanguageValue,
  { success: string; error: string; loading: string }
> = {
  en: {
    success: "Language has been changed!",
    error: "Error changing language!",
    loading: "Loading...",
  },
  pl: {
    success: "Język został zmieniony!",
    error: "Błąd zmiany języka!",
    loading: "Ładowanie...",
  },
};
