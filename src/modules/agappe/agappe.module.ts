import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import { AgappeController } from './controllers/agappe/agappe.controller';
import { AgappeService } from './services/agappe/agappe.service';

@Module({
  imports: [InMemoryDBModule],
  controllers: [AgappeController],
  providers: [AgappeService],
})
export class AgappeModule { }
