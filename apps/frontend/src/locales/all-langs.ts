// core (MUI)
import { plPL as plPLCore } from "@mui/material/locale";
// data grid (MUI)
import {
  enUS as enUSDataGrid,
  plPL as plPLDataGrid,
} from "@mui/x-data-grid/locales";
// date pickers (MUI)
import {
  enUS as enUSDate,
  plPL as plPLDate,
} from "@mui/x-date-pickers/locales";

export const allLangs = [
  {
    value: "pl",
    label: "Polski",
    countryCode: "PL",
    adapterLocale: "pl",
    numberFormat: { code: "pl-PL", currency: "PLN" },
    systemValue: {
      components: {
        ...plPLCore.components,
        ...plPLDate.components,
        ...plPLDataGrid.components,
      },
    },
  },
  {
    value: "en",
    label: "English",
    countryCode: "US",
    adapterLocale: "en",
    numberFormat: { code: "en-US", currency: "USD" },
    systemValue: {
      components: { ...enUSDate.components, ...enUSDataGrid.components },
    },
  },
];

/**
 * Country code:
 * https://flagcdn.com/en/codes.json
 *
 * Number format code:
 * https://gist.github.com/raushankrjha/d1c7e35cf87e69aa8b4208a8171a8416
 */
