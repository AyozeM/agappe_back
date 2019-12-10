import { Module } from '@nestjs/common';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { AgappeModule } from './modules/agappe/agappe.module';

@Module({
  imports: [AgappeModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
