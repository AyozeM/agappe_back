import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';
import { DatabaseSchema, defaultsValues, AgappeDTO } from '../../typings/database-schema.interface';

@Injectable()
export class AgappeService {

  constructor(
    private readonly db: InMemoryDBService<DatabaseSchema>,
  ) {
    this.db.createMany(defaultsValues);
  }

  /**
   * Get all agappes
   * @returns agappes list
   */
  getAllAgappes(): DatabaseSchema[] {
    return this.db.getAll();
  }

  addAgappe(newAgappe: AgappeDTO) {
    return this.db.create(newAgappe.export(['id']));
  }
}
