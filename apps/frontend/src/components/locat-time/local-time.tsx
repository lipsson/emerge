import { Iconify } from "@/components/iconify";
import { useTranslate } from "@/locales";
import Tooltip from "@mui/material/Tooltip";
import dayjs from "dayjs";

const defaultDate = new Date();

export const LocalTime = () => {
  const { t } = useTranslate("common");

  const timezoneOffsetString = dayjs(defaultDate).format("Z");

  return (
    <Tooltip title={`${t("actions.localTime")} (${timezoneOffsetString})`}>
      <span style={{ display: "inline-flex" }}>
        <Iconify icon="fluent-emoji-flat:watch" color="info.main" width={25} />
      </span>
    </Tooltip>
  );
};
