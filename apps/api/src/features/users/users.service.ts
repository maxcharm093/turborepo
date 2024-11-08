import { User } from '@/features/users/entities/user.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly UserRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.UserRepository.create(createUserDto);
      await this.UserRepository.save(user);
      return user;
    } catch (e) {
      console.log(e);
      throw new BadRequestException(
        'Something went wrong while creating user.',
      );
    }
  }
}
