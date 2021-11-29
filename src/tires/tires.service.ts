import { UpdateTireDto } from './dto/update-tire.dto';
import { CreateTireDto } from './dto/create-tire.dto';
import { TiresRepository } from './../tires/tires.repository';
import { Tire } from './../tires/entities/tire.entity';
import { UsersRepository } from './../users/users.repository';
import { User } from './../users/entities/user.entity';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Trim } from 'src/trims/entities/trim.entity';
import { TrimsRepository } from 'src/trims/trims.repository';

@Injectable()
export class TiresService {
  constructor(
    // @InjectRepository(Trim)
    // private readonly trimsRepository: TrimsRepository,
    // @InjectRepository(User)
    // private readonly userRepository: UsersRepository,
    @InjectRepository(Tire)
    private readonly tireRepository: TiresRepository,
  ) { }

  async create(createTireDto: CreateTireDto) {
    await this.tireRepository.save(createTireDto);
    return "Tire insert finished"
  }

  async findOne(userName: { userId: string }) {
    // const userId = userName.userId;
    // const user = await this.userRepository.findOne({ userId })
    // console.log(user);

    // const trim = await this.trimsRepository.find({ userId: user })
    // console.log(trim);

    // for (let i = 0; i < trim.length; i++) {
    //   const tire = await this.tireRepository.find({ trimId: trim[i] });
    //   console.log('tire', tire)
    // }
  }

  update(id: number, updateTrimDto: UpdateTireDto) {
    return `This action updates a #${id} trim`;
  }

  remove(id: number) {
    return `This action removes a #${id} trim`;
  }
}
