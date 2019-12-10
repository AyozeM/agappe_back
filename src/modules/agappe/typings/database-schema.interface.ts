import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import { HttpException, HttpStatus } from '@nestjs/common';

export class AgappeDTO implements DatabaseSchema {
  id: number = null;
  author: string = null;
  title: string = null;
  score: number = null;
  date: Date = null;

  constructor(data: DatabaseSchema) {
    Object.getOwnPropertyNames(this).forEach(e => {
      this[e] = data[e];
    });
  }

  /**
   * export object's data into plain object
   * @param excluded name of excluded fields to export
   */
  export(excluded?: string[]): DatabaseSchema {
    const fields: string[] = Object.getOwnPropertyNames(this).filter(e => !excluded.includes(e));
    if (!fields.map(e => this[e]).every(e => e)) {
      throw new HttpException('all fields are required', HttpStatus.BAD_REQUEST);
    }
    return fields.reduce((prev, actual) => ({ ...prev, [actual]: this[actual] }), {}) as DatabaseSchema;
  }
}

export interface DatabaseSchema extends InMemoryDBEntity {
  author: string;
  title: string;
  score: number;
  date: Date;
}

export const defaultsValues: DatabaseSchema[] = [
  {
    author: 'Ayoze',
    title: 'tortilla',
    score: 5,
    date: new Date('2019-12-9'),
  },
  {
    author: 'Mireya',
    title: 'queque',
    score: 5,
    date: new Date('2019-11-17'),
  },
].map(e => e as DatabaseSchema);
