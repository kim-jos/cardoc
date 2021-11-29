import { Trim } from './../../trims/entities/trim.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Tire {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Trim, (trim) => trim.tire)
  trim: Trim;

  @Column()
  type: string; // front or rear

  @Column()
  wheelWidth: number;

  @Column()
  wheelFlatness: number;

  @Column()
  wheelSize: number;
}
