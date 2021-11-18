import {Entity, model, property} from '@loopback/repository';

@model()
export class Session extends Entity {

  constructor(data?: Partial<Session>) {
    super(data);
  }
}

export interface SessionRelations {
  // describe navigational properties here
}

export type SessionWithRelations = Session & SessionRelations;
