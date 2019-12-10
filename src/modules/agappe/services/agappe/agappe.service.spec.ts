import { Test, TestingModule } from '@nestjs/testing';
import { AgappeService } from './agappe.service';
import { AgappeController } from '../../controllers/agappe/agappe.controller';

describe('AgappeService', () => {
  let service: AgappeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgappeController],
      providers: [AgappeService],
    }).compile();

    service = module.get<AgappeService>(AgappeService);
  });

  xit('should be defined', () => {
    expect(service).toBeDefined();
  });
});
