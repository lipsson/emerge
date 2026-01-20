import { Test, TestingModule } from '@nestjs/testing';
import { EventLevel } from '../types/events.types';
import { EventsService } from './events.service';

describe('EventsService', () => {
  let service: EventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventsService],
    }).compile();

    service = module.get<EventsService>(EventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all events when no filters are applied', () => {
    const result = service.findAll();
    expect(result.length).toBe(4);
  });

  it('should filter by minLevel (WARNING and above)', () => {
    const result = service.findAll([EventLevel.WARNING]);
    // Powinno zwrócić WARNING (id: 2) i ERROR (id: 3)
    expect(result.length).toBe(2);
    expect(result.every((e) => e.level >= EventLevel.WARNING)).toBe(true);
  });

  it('should filter by startDate', () => {
    const startDate = new Date('2026-01-19T10:07:00Z');
    const result = service.findAll(undefined, startDate);
    // Powinno zwrócić id: 3 i id: 4
    expect(result.length).toBe(2);
    expect(result[0].id).toBe('3');
  });

  it('should filter by endDate', () => {
    const endDate = new Date('2026-01-19T10:06:00Z');
    const result = service.findAll(undefined, undefined, endDate);
    // Powinno zwrócić id: 1 i id: 2
    expect(result.length).toBe(2);
    expect(result[result.length - 1].id).toBe('2');
  });

  it('should filter by date range and minLevel simultaneously', () => {
    const minLevel = [EventLevel.INFO];
    const startDate = new Date('2026-01-19T10:02:00Z');
    const endDate = new Date('2026-01-19T10:12:00Z');

    const result = service.findAll(minLevel, startDate, endDate);

    // Pasują:
    // id 2 (WARNING, 10:05)
    // id 3 (ERROR, 10:10)
    // id 4 jest DEBUG (za niski level), id 1 jest 10:00 (za wcześnie)
    expect(result.length).toBe(2);
    expect(result.map((e) => e.id)).toContain('2');
    expect(result.map((e) => e.id)).toContain('3');
  });

  it('should return empty array when no events match criteria', () => {
    const result = service.findAll([EventLevel.ERROR], new Date('2020-01-01T00:00:00Z'));
    expect(result.length).toBe(0);
  });
});
