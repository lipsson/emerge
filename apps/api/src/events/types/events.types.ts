export enum EventLevel {
  DEBUG = 0,
  INFO = 1,
  WARNING = 2,
  ERROR = 3,
}

export type SystemEvent = {
  id: string;
  level: EventLevel;
  message: string;
  timestamp: Date;
};
