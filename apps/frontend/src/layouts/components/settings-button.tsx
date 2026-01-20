import { Iconify } from "@/components/iconify";

import { useSettingsContext } from "@/components/settings/context";
import { useTranslate } from "@/locales";
import IconButton from "@mui/material/IconButton";
import { useColorScheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";

export function SettingsButton() {
  const settings = useSettingsContext();

  const { mode, setMode } = useColorScheme();
  const { t } = useTranslate("common");

  return (
    <Tooltip title={t("actions.mode")}>
      <IconButton
        onClick={() => {
          settings.onUpdateField(
            "colorScheme",
            mode === "light" ? "dark" : "light",
          );
          setMode(mode === "light" ? "dark" : "light");
        }}
        sx={{
          "& svg": {
            width: 25,
            height: 25,
          },
        }}
      >
        <Iconify
          icon={
            mode === "light"
              ? "fluent-emoji-flat:sun-with-face"
              : "fluent-emoji-flat:new-moon-face"
          }
        />
      </IconButton>
    </Tooltip>
  );
}
