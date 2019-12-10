import { Test, TestingModule } from '@nestjs/testing';
import { AgappeController } from './agappe.controller';
import { AgappeService } from '../../services/agappe/agappe.service';

describe('Agappe Controller', () => {
  let controller: AgappeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgappeController],
      providers: [AgappeService],
    }).compile();

    controller = module.get<AgappeController>(AgappeController);
  });

  xit('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
