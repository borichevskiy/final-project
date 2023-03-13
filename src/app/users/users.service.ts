import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { createHash } from 'crypto';
import { Repository } from 'typeorm';
import {
  RegistrationDto,
  UpdateUserDto,
} from './dtos/registration.dto';
import { UserEntity } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async registration(registrationDto: RegistrationDto) {
    const user = await this.userRepository.findOne({where:{
      email: registrationDto.email,
  }});

    if (user) {
      throw new BadRequestException();
    }

    const createdUser = this.userRepository.create(registrationDto);
    const saveUser = await this.userRepository.save(createdUser);
    delete saveUser.password;
    return saveUser;
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findByEmailAndGetPassword(email: string) {
    return await this.userRepository.findOne({
      select: ['id', 'password'],
      where: { email },
    });
  }

  async findById(userId: string) {
    return await this.userRepository.findOne({where: {id: userId}});
  }

  async findOne(id: string) {
    return await this.userRepository.findOne({where:{id}});
  }

  

  async findByEmail(email: string) {
    return await this.userRepository.findOneOrFail({
      where: { email },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      id,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException(`User with id ${id} does not exist`);
    }
    return this.userRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne({where:{id}});

    if (!user) {
      throw new NotFoundException(`User with id ${id} does not exist`);
    }

    return this.userRepository.remove(user);
  }

  async setCurrentRefreshToken(refreshToken: string, userId: string) {
    //crypto is a node module, and bcrypt the maximum length of the hash is 60 characters, and token is longer than that, so we need to hash it
    const hash = createHash('sha256').update(refreshToken).digest('hex');

    const currentHashedRefreshToken = await bcrypt.hashSync(hash, 10);
    return await this.userRepository.update(userId, {
      refreshToken: currentHashedRefreshToken,
    });
  }

  async removeRefreshToken(userId: string) {
    await this.findById(userId);

    return this.userRepository.update(
      { id: userId },
      {
        refreshToken: null,
      },
    );
  }

  async getUserIfRefreshTokenMatches(refreshToken: string, userId: string) {
    const user = await this.userRepository.findOne({
      select: ['id', 'refreshToken'],
      where: { id: userId },
    });

    const hash = createHash('sha256').update(refreshToken).digest('hex');
    const isRefreshTokenMatching = await bcrypt.compare(
      hash,
      user.refreshToken,
    );

    if (isRefreshTokenMatching) {
      return { id: user.id, role: user.userRole };
    }
  }
}
