import { fallbackLng, i18nOptions } from "@/locales";
import { CONFIG } from "@/utils/config-global.ts";

import { localStorageGetItem } from "@/utils/storage-available";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { I18nextProvider as Provider, initReactI18next } from "react-i18next";

let lng;

/**
 * [1] localStorage
 * Auto detection:
 * const lng = localStorageGetItem('i18nextLng')
 */
if (CONFIG.isStaticExport) {
  lng = localStorageGetItem("i18nextLng", fallbackLng);
}

const init = CONFIG.isStaticExport
  ? { ...i18nOptions(lng), detection: { caches: ["localStorage"] } }
  : { ...i18nOptions(), detection: { caches: ["cookie"] } };

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (lang: string, ns: string) => import(`../langs/${lang}/${ns}.json`),
    ),
  )
  .init(init);

type Props = {
  children: React.ReactNode;
};

export function I18nProvider({ children }: Props) {
  return <Provider i18n={i18next}>{children}</Provider>;
}
