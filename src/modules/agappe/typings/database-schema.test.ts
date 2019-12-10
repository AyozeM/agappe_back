import { Test } from '@nestjs/testing';
import { AgappeDTO, DatabaseSchema } from './database-schema.interface';

describe('AgappeDTO', () => {
  let model: DatabaseSchema;
  beforeEach(() => {
    model = {
      id: null,
      author: 'suso',
      score: 4,
      title: 'frangollo',
      date: new Date(),
    };
  });
});
