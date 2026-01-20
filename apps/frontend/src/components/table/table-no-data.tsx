import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { EmptyContent } from "../empty-content";
import type { TableNoDataProps } from "./types/table.types";

export const TableNoData = ({ notFound, sx }: TableNoDataProps) => {
  return (
    <TableRow data-testid="table-no-data-row">
      {notFound ? (
        <TableCell colSpan={12}>
          <EmptyContent filled sx={{ py: 10, ...sx }} />
        </TableCell>
      ) : (
        <TableCell colSpan={12} sx={{ p: 0 }} />
      )}
    </TableRow>
  );
};
