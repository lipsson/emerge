export const environment = {
  // W Vite używamy .MODE zamiast .NODE_ENV.
  // Zwraca to 'development', 'production' lub 'test'.
  ENV: import.meta.env.MODE,
} as const;
if (!environment.ENV) {
  throw new Error("NODE_ENV is not defined");
}

export const isTestEnv = environment.ENV === "test";

export const isDevelopment = environment.ENV === "development";
