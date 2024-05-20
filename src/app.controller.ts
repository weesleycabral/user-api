import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateUserBody } from './dtos/create-user-body';
import { UsersRepository } from './repositories/user-repository';

@Controller()
export class AppController {
  constructor(private usersRepository: UsersRepository) { }

  @Get()
  getUsers() {
    return this.usersRepository.getUsers()
  }

  @Post()
  async createUser(@Body() body: CreateUserBody) {
    const { name, function: userFunction } = body

    // const user = await this.prisma.user.create({
    //   data: {
    //     id: randomUUID(),
    //     name,
    //     function: userFunction,
    //   }
    // })

    await this.usersRepository.create(name, userFunction)
  }
}
