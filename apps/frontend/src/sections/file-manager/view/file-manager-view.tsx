import { useEvents } from "@/api/queries/use-get-events.query.ts";
import { useTranslate } from "@/locales";
import { getLevelColor } from "@/sections/file-manager/utils/events.utils.ts";
import { EventLevel } from "@/types/events.types.ts";
import {
  Autocomplete,
  Box,
  Chip,
  Container,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

export function FileManagerView() {
  const { t } = useTranslate("common");
  const options = [
    { value: EventLevel.DEBUG, label: "DEBUG" },
    { value: EventLevel.INFO, label: "INFO" },
    { value: EventLevel.WARNING, label: "WARNING" },
    { value: EventLevel.ERROR, label: "ERROR" },
  ];
  // Stan filtrów przechowuje obiekty Dayjs
  const [minLevel, setMinLevel] = useState<EventLevel[]>(
    options.map((option) => option.value) as EventLevel[],
  );
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  // Przekazujemy obiekty Dayjs bezpośrednio do hooka
  const {
    data: events = [],
    isLoading,
    isFetching,
  } = useEvents({
    minLevel,
    startDate,
    endDate,
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: t("table.id"), width: 90 },
    {
      field: "level",
      headerName: t("table.level"),
      width: 130,
      renderCell: (params: GridRenderCellParams) => {
        const levelName = Object.keys(EventLevel).find(
          (key) => EventLevel[key as keyof typeof EventLevel] === params.value,
        );

        return (
          <Chip
            label={levelName}
            color={getLevelColor(params.value as number)}
            size="small"
            variant="outlined"
          />
        );
      },
    },
    {
      field: "message",
      headerName: t("table.message"),
      flex: 1,
      minWidth: 200,
    },
    {
      field: "timestamp",
      headerName: t("table.date"),
      width: 200,
      // Formatowanie daty w tabeli przy użyciu dayjs
      valueFormatter: (value?: string) => {
        if (!value) return "";
        return dayjs(value).format("DD.MM.YYYY HH:mm:ss");
      },
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        {t("app.title")}
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }} elevation={2}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <FormControl sx={{ minWidth: 150 }}>
            <Autocomplete
              multiple
              options={options}
              getOptionLabel={(option) => option.label}
              value={options.filter((opt) => minLevel.includes(opt.value))}
              onChange={(_, newValue) => {
                // newValue to teraz tablica obiektów { value, label }
                setMinLevel(
                  newValue.length > 0
                    ? newValue.map((v) => v.value as EventLevel)
                    : [],
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={t("filters.minLevel")}
                  placeholder={
                    minLevel.length === 0 ? t("filters.minLevel") : ""
                  }
                />
              )}
            />
          </FormControl>

          <DatePicker
            label={t("filters.startDate")}
            value={startDate}
            // onChange zwraca Dayjs | null
            onChange={(newValue) => setStartDate(newValue)}
            maxDate={endDate !== null ? endDate : dayjs()}
            slotProps={{
              textField: { size: "medium" },
              actionBar: {
                actions: ["clear"], // Dodaje przycisk "Wyczyść" w kalendarzu
              },
            }}
          />

          <DatePicker
            label={t("filters.endDate")}
            value={endDate}
            onChange={(newValue) => setEndDate(newValue)}
            minDate={startDate !== null ? startDate : dayjs()}
            slotProps={{
              textField: { size: "medium" },
              actionBar: {
                actions: ["clear"], // Dodaje przycisk "Wyczyść" w kalendarzu
              },
            }}
          />
        </Box>
      </Paper>

      <Paper sx={{ height: 600, width: "100%" }} elevation={2}>
        <DataGrid
          rows={events}
          columns={columns}
          loading={isLoading || isFetching}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
            sorting: {
              sortModel: [{ field: "timestamp", sort: "desc" }],
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          disableRowSelectionOnClick
          sx={{ border: 0 }}
        />
      </Paper>
    </Container>
  );
}
