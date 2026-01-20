import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { TFunction } from "i18next";
import type { TableSelectedActionProps } from "./types/table.types";

export const TableSelectedAction = ({
  dense,
  action,
  rowCount,
  numSelected,
  onSelectAllRows,
  sx,
  t,
  ...other
}: TableSelectedActionProps & { t: TFunction }) => {
  if (!numSelected) {
    return null;
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        pl: 1,
        pr: 2,
        top: 0,
        left: 0,
        width: 1,
        zIndex: 9,
        height: 58,
        position: "absolute",
        bgcolor: "primary.lighter",
        ...(dense && { height: 38 }),
        ...sx,
      }}
      {...other}
    >
      <Checkbox
        indeterminate={!!numSelected && numSelected < rowCount}
        checked={!!rowCount && numSelected === rowCount}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onSelectAllRows(event.target.checked)
        }
      />

      <Typography
        variant="subtitle2"
        sx={{
          ml: 2,
          flexGrow: 1,
          color: "primary.main",
          ...(dense && { ml: 3 }),
        }}
      >
        {numSelected} {t("actions.selectRows")}
      </Typography>

      {action && action}
    </Stack>
  );
};
