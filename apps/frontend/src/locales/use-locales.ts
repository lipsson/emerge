import { toast } from "@/components/snackbar";
import dayjs from "dayjs";
import { useCallback } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import { allLangs } from "./all-langs";
import type { LanguageValue } from "./config-locales";
import { changeLangMessages as messages, fallbackLng } from "./config-locales";

export function useTranslate(ns?: string) {
  const { t, i18n } = useTranslation(ns);

  const [_cookie, setCookie] = useCookies(["language"]);
  const fallback = allLangs.filter((lang) => lang.value === fallbackLng)[0];

  const currentLang = allLangs.find(
    (lang) => lang.value === i18n.resolvedLanguage,
  );

  const onChangeLang = useCallback(
    (newLang: LanguageValue) => {
      try {
        const langChangePromise = i18n.changeLanguage(newLang);

        const currentMessages = messages[newLang] || messages.pl;

        toast.promise(langChangePromise, {
          loading: currentMessages.loading,
          success: () => currentMessages.success,
          error: currentMessages.error,
        });
        setCookie("language", newLang);
        if (currentLang) {
          dayjs.locale(currentLang.adapterLocale);
        }
      } catch (error) {
        console.error(error, "e");
      }
    },
    [currentLang, i18n, setCookie],
  );

  return {
    t,
    i18n,
    onChangeLang,
    currentLang: currentLang ?? fallback,
  };
}
