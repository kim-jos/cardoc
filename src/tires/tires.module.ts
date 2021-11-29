import { TiresRepository } from './tires.repository';
import { Module } from '@nestjs/common';
import { Tire } from './entities/tire.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tire, TiresRepository])],
})
export class TiresModule { }
