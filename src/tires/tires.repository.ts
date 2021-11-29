import { Tire } from './entities/tire.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Tire)
export class TiresRepository extends Repository<Tire> { }
