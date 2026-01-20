import type { ThemeColorScheme, ThemeDirection } from "@/types/types.ts";

export type SettingsState = {
  fontFamily: string;
  compactLayout: boolean;
  direction: ThemeDirection;
  colorScheme: ThemeColorScheme;
  contrast: "default" | "hight";
  navColor: "integrate" | "apparent";
  navLayout: "vertical" | "horizontal" | "mini";
  primaryColor: "default" | "cyan" | "purple" | "blue" | "orange" | "red";
};

export type SettingsContextValue = SettingsState & {
  canReset: boolean;
  onReset: () => void;
  onUpdate: (updateValue: Partial<SettingsState>) => void;
  onUpdateField: (
    name: keyof SettingsState,
    updateValue: SettingsState[keyof SettingsState],
  ) => void;
  // Drawer
  openDrawer: boolean;
  onCloseDrawer: () => void;
  onToggleDrawer: () => void;
};

export type SettingsProviderProps = {
  settings: SettingsState;
  children: React.ReactNode;
};
