import { Module } from '@nestjs/common';
import { EventsController } from '../controller/events.controller';
import { EventsService } from '../services/events.service';

@Module({
  imports: [],
  providers: [EventsService],
  controllers: [EventsController],
})
export class EventsModule {}
