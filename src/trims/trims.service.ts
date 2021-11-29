import { TiresRepository } from './../tires/tires.repository';
import { Tire } from './../tires/entities/tire.entity';
import { UsersRepository } from './../users/users.repository';
import { User } from './../users/entities/user.entity';
import { Trim } from './entities/trim.entity';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTrimDto } from './dto/create-trim.dto';
import { UpdateTrimDto } from './dto/update-trim.dto';
import { TrimsRepository } from './trims.repository';

@Injectable()
export class TrimsService {
  constructor(
    @InjectRepository(Trim)
    private readonly trimsRepository: TrimsRepository,
    @InjectRepository(User)
    private readonly userRepository: UsersRepository,
    @InjectRepository(Tire)
    private readonly tireRepository: TiresRepository,
  ) { }

  async create(createTrimDto: CreateTrimDto[]) {

    for (let i = 0; i < createTrimDto.length; i++) {
      const user = await this.userRepository.findOne({
        userId: createTrimDto[i].userId
      })
      if (!user) throw new ForbiddenException('User does not exist');

      // create new tire
      const newTire = await this.tireRepository.create({
        type: createTrimDto[i].tire.type,
        wheelWidth: createTrimDto[i].tire.wheelWidth,
        wheelFlatness: createTrimDto[i].tire.wheelFlatness,
        wheelSize: createTrimDto[i].tire.wheelSize,
      })
      const savedTire = await this.tireRepository.save(newTire);

      // connect tire to trim
      let trim = await this.trimsRepository.findOne({
        trimId: createTrimDto[i].trimId
      })
      if (!trim) {
        trim = await this.trimsRepository.create({
          trimId: createTrimDto[i].trimId,
          tire: [],
        });
      }
      const tire = await this.tireRepository.find({ trim })
      trim.tire = tire;
      trim.tire.push(savedTire);
      await this.trimsRepository.save(trim);

      // connect trim to user
      const trims = await this.trimsRepository.find({
        userId: user
      })
      user.trim = trims;
      user.trim.push(trim);
      await this.userRepository.save({ ...user });
    }

    return "Insert finished"
  }

  async findOne(userName: { userId: string }) {
    const userId = userName.userId;
    const user = await this.userRepository.findOne({ userId })
    if (!user) throw new ForbiddenException('User does not exist')

    const trim = await this.trimsRepository.find({ userId: user })

    for (let i = 0; i < trim.length; i++) {
      const tire = await this.tireRepository.find({ trim: trim[i] });
      console.log('tire', tire)
    }
  }

  update(id: number, updateTrimDto: UpdateTrimDto) {
    return `This action updates a #${id} trim`;
  }

  remove(id: number) {
    return `This action removes a #${id} trim`;
  }
}
