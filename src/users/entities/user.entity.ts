import { BaseCommonEntity } from 'src/common/base-common.entity';
import { Trim } from 'src/trims/entities/trim.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class User extends BaseCommonEntity {
  @Column()
  userId: string;

  @Column()
  password: string;

  @OneToMany(() => Trim, (trim) => trim.userId)
  trim: Trim[];
}
