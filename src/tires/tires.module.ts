import { TiresService } from './tires.service';
import { TiresController } from './tires.controller';
import { TiresRepository } from './tires.repository';
import { Module } from '@nestjs/common';
import { Tire } from './entities/tire.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tire, TiresRepository])],
  controllers: [TiresController],
  providers: [TiresService]
})
export class TiresModule { }
