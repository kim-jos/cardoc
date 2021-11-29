import { Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { User } from './../../users/entities/user.entity';
import { Tire } from './../../tires/entities/tire.entity';

@Entity()
export class Trim {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  trimId: number;

  @OneToMany(() => Tire, (tire) => tire.trim)
  tire: Tire[];

  @ManyToOne(() => User, (user) => user.trim)
  userId: User;
}
