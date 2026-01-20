import { EventLevel } from "@/types/events.types.ts";

export const getLevelColor = (level: number) => {
  switch (level) {
    case EventLevel.ERROR:
      return "error";
    case EventLevel.WARNING:
      return "warning";
    case EventLevel.INFO:
      return "info";
    case EventLevel.DEBUG:
    default:
      return "default";
  }
};
