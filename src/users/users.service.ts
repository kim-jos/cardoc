import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: UsersRepository,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<number> {
    const existingUser = await this.usersRepository.findOne({
      userId: createUserDto.userId,
    });

    if (existingUser) throw new ForbiddenException("User already exists");

    const hash = await bcrypt.hash(createUserDto.password, 10);
    const user = this.usersRepository.create({
      ...createUserDto,
      password: hash,
    });
    const userPromise = await this.usersRepository.save(user);
    return userPromise.id;
  }

  async findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const existingUser = await this.usersRepository.findOne({
      id: id,
    });
    if (!existingUser) throw new NotFoundException();

    return existingUser;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const existingUser = await this.usersRepository.findOne({
      id: id,
    });
    if (!existingUser) throw new NotFoundException();
    existingUser.password = await bcrypt.hash(updateUserDto.password, 10);

    const updateUser = await this.usersRepository.save(existingUser);
    return updateUser;
  }

  async remove(id: number) {
    const existingUser = await this.usersRepository.findOne({
      id: id,
    });
    if (!existingUser) throw new NotFoundException();

    await this.usersRepository.remove(existingUser);
    return `User with id of ${id} was removed`;
  }
}
