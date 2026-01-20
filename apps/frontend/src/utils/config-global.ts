import packageJson from "../../package.json";

export type ConfigValue = {
  isStaticExport: boolean | string;
  site: {
    name: string;
    assetURL: string;
    basePath: string;
    version: string;
  };
};

export const CONFIG: ConfigValue = {
  site: {
    name: "Aplikacja do podglądu zdarzeń systemowych",
    assetURL: "",
    basePath: "",
    version: packageJson.version,
  },

  isStaticExport: "pl",
};
