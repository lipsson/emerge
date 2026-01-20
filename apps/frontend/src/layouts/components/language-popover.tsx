import { CustomPopover, usePopover } from "@/components/custom-popover";
import { FlagIcon } from "@/components/iconify";
import { allLangs, LanguageValue, useTranslate } from "@/locales";
import type { IconButtonProps } from "@mui/material/IconButton";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";

import MenuList from "@mui/material/MenuList";
import { useCallback } from "react";

export type LanguagePopoverProps = IconButtonProps & {
  data?: {
    value: string;
    label: string;
    countryCode: string;
  }[];
};

export function LanguagePopover() {
  const popover = usePopover();

  const { onChangeLang, currentLang } = useTranslate();

  const handleChangeLang = useCallback(
    async (newLang: LanguageValue) => {
      console.log(newLang, "newLang");
      await onChangeLang(newLang);
      popover.onClose();
    },
    [onChangeLang, popover],
  );

  console.log(currentLang, "currentLang LanguagePopoverProps");
  return (
    <>
      <IconButton
        component={"button"}
        onClick={popover.onOpen}
        sx={{
          p: 0,
          width: 40,
          height: 40,
          ...(popover.open && { bgcolor: "action.selected" }),
        }}
      >
        <FlagIcon code={currentLang.countryCode} />
      </IconButton>

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
      >
        <MenuList
          sx={{
            width: 160,
            minHeight: 72,
          }}
        >
          {allLangs?.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === currentLang.value}
              onClick={() => handleChangeLang(option.value as LanguageValue)}
            >
              <FlagIcon code={option.countryCode} />
              {option.label}
            </MenuItem>
          ))}
        </MenuList>
      </CustomPopover>
    </>
  );
}
