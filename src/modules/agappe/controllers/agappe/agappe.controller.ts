import { Body, Controller, Get, Post } from '@nestjs/common';
import { AgappeService } from '../../services/agappe/agappe.service';
import { AgappeDTO, DatabaseSchema } from '../../typings/database-schema.interface';

@Controller('agappe')
export class AgappeController {

  constructor(
    private readonly agappeService: AgappeService,
  ) { }

  @Get('all')
  getAll() {
    return this.agappeService.getAllAgappes();
  }

  @Post('add')
  insertAgappe(@Body() agappeData: DatabaseSchema) {
    const agappe = new AgappeDTO(agappeData);
    return this.agappeService.addAgappe(agappe);
  }
}
