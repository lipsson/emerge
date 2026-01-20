import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import type { TableEmptyRowsProps } from "./types/table.types";

export const TableEmptyRows = ({ emptyRows, height }: TableEmptyRowsProps) => {
  if (!emptyRows) {
    return null;
  }

  return (
    <TableRow sx={{ ...(height && { height: height * emptyRows }) }}>
      <TableCell colSpan={9} />
    </TableRow>
  );
};
