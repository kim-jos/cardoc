import { BaseCommonEntity } from 'src/common/base-common.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseCommonEntity {
  @Column()
  userId: string;

  @Column()
  password: string;
}
