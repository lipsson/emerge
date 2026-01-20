import type { StackProps } from "@mui/material/Stack";
import type { SxProps, Theme } from "@mui/material/styles";
import type { TablePaginationProps } from "@mui/material/TablePagination";

export type TableProps = {
  dense: boolean;
  page: number;
  rowsPerPage: number;
  order: "asc" | "desc";
  orderBy: string;
  //
  selected: string[];
  onSelectRow: (id: string) => void;
  onSelectAllRows: (checked: boolean, newSelecteds: string[]) => void;
  //
  onResetPage: () => void;
  onSort: (id: string) => void;
  onChangePage: (event: unknown, newPage: number) => void;
  onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDense: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onUpdatePageDeleteRow: (totalRowsInPage: number) => void;
  onUpdatePageDeleteRows: ({
    totalRowsInPage,
    totalRowsFiltered,
  }: {
    totalRowsInPage: number;
    totalRowsFiltered: number;
  }) => void;
  //
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setDense: React.Dispatch<React.SetStateAction<boolean>>;
  setOrder: React.Dispatch<React.SetStateAction<"desc" | "asc">>;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
};

export type TableNoDataProps = {
  notFound: boolean;
  sx?: SxProps<Theme>;
};

export type TableEmptyRowsProps = {
  height?: number;
  emptyRows: number;
};

export type TableHeadCustomProps = {
  orderBy?: string;
  rowCount?: number;
  sx?: SxProps<Theme>;
  numSelected?: number;
  order?: "asc" | "desc";
  onSort?: (id: string) => void;
  headLabel: Record<string, any>[];
  onSelectAllRows?: (checked: boolean) => void;
};

export type TablePaginationCustomProps = TablePaginationProps & {
  dense?: boolean;
  sx?: SxProps<Theme>;
  onChangeDense?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type UseTableReturn = TableProps;

export type UseTableProps = {
  defaultDense?: boolean;
  defaultOrder?: "asc" | "desc";
  defaultOrderBy?: string;
  defaultSelected?: string[];
  defaultRowsPerPage?: number;
  defaultCurrentPage?: number;
};

export type TableSelectedActionProps = StackProps & {
  dense?: boolean;
  rowCount: number;
  numSelected: number;
  action?: React.ReactNode;
  onSelectAllRows: (checked: boolean) => void;
};
