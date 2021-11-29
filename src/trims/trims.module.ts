import { TiresRepository } from './../tires/tires.repository';
import { TrimsRepository } from './trims.repository';
import { Module } from '@nestjs/common';
import { TrimsService } from './trims.service';
import { TrimsController } from './trims.controller';
import { UsersRepository } from 'src/users/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Trim } from './entities/trim.entity';
import { Tire } from 'src/tires/entities/tire.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UsersRepository, Trim, TrimsRepository, Tire, TiresRepository])],
  controllers: [TrimsController],
  providers: [TrimsService]
})
export class TrimsModule { }
