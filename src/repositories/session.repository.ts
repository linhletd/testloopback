import {inject} from '@loopback/core';
import {DefaultKeyValueRepository} from '@loopback/repository';
import {RedisDataSource} from '../datasources';
import {Session} from '../models';

export class SessionRepository extends DefaultKeyValueRepository<
  Session
> {
  constructor(
    @inject('datasources.redis') dataSource: RedisDataSource,
  ) {
    super(Session, dataSource);
  }
}
