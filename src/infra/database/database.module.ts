import { Module } from '@nestjs/common';
import { UserRepository } from 'src/application/repositories/user-repository';
import { PrismaUserRepository } from './prisma/repositories/prisma-user-repository';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    PrismaService,
  ],
  exports: [
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    PrismaService,
  ],
})
export class DatabaseModule {}
