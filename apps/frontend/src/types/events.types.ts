import type { Dayjs } from "dayjs";

export const EventLevel = {
  DEBUG: 0,
  INFO: 1,
  WARNING: 2,
  ERROR: 3,
} as const;

export type EventLevel = (typeof EventLevel)[keyof typeof EventLevel];

export type SystemEvent = {
  id: string;
  level: EventLevel;
  message: string;
  timestamp: string;
};

export type EventsFilters = {
  minLevel: EventLevel[];
  startDate: Dayjs | null;
  endDate: Dayjs | null;
};
