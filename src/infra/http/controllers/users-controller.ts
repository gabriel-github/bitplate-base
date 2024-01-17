import { Body, Controller, Post } from '@nestjs/common';
import { CreateUser } from 'src/application/usecases/create-user';
import { CreateUserBody } from '../dtos/create-user-body';

@Controller('/users')
export class UsersController {
  constructor(private createUser: CreateUser) {}

  @Post('/create')
  async create(@Body() body: CreateUserBody) {
    const { email } = body;

    const { user } = await this.createUser.execute({
      email,
    });

    return {
      email: user.email,
      id: user.id,
    };
  }
}
