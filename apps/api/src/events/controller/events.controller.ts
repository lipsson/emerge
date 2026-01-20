import { Controller, Get, ParseArrayPipe, Query } from '@nestjs/common';
import { EventsService } from '../services/events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  getEvents(
    @Query('minLevel', new ParseArrayPipe({ items: Number, separator: ',', optional: true }))
    minLevel?: number[],
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    const levels = minLevel && minLevel.length > 0 ? minLevel : undefined;
    return this.eventsService.findAll(
      levels,
      startDate ? new Date(startDate) : undefined,
      endDate ? new Date(endDate) : undefined,
    );
  }
}
