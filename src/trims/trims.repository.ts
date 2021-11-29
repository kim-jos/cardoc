import { EntityRepository, Repository } from 'typeorm';
import { Trim } from './entities/trim.entity';

@EntityRepository(Trim)
export class TrimsRepository extends Repository<Trim> { }
