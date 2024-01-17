import { Module } from '@nestjs/common';
import { InMemoryUserRepository } from 'test/repositories/user-repository';
import { UsersController } from './controllers/users-controller';
import { CreateUser } from 'src/application/usecases/create-user';
import { UserRepository } from 'src/application/repositories/user-repository';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    CreateUser,
    {
      provide: UserRepository,
      useClass: InMemoryUserRepository,
    },
  ],
})
export class HttpModule {}
