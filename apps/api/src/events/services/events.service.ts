import { Injectable } from '@nestjs/common';
import { EventLevel, SystemEvent } from '../types/events.types';

@Injectable()
export class EventsService {
  private readonly events: SystemEvent[] = [
    { id: '1', level: EventLevel.INFO, message: 'System wystartował', timestamp: new Date('2026-01-19T10:00:00Z') },
    {
      id: '2',
      level: EventLevel.WARNING,
      message: 'Wysokie zużycie pamięci',
      timestamp: new Date('2022-01-19T10:05:00Z'),
    },
    {
      id: '3',
      level: EventLevel.ERROR,
      message: 'Połączenie z bazą danych nie powiodło się',
      timestamp: new Date('2024-01-19T10:10:00Z'),
    },
    {
      id: '4',
      level: EventLevel.DEBUG,
      message: 'Pobieranie danych użytkownika',
      timestamp: new Date('2025-01-19T10:15:00Z'),
    },
  ];

  findAll(minLevel?: EventLevel[], startDate?: Date, endDate?: Date): SystemEvent[] {
    return this.events.filter((event) => {
      if (minLevel && minLevel.length > 0 && !minLevel.includes(event.level)) {
        return false;
      }
      if (startDate && event.timestamp < startDate) return false;
      return !(endDate && event.timestamp > endDate);
    });
  }
}
