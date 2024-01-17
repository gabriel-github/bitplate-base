import { Injectable } from '@nestjs/common';
import { User } from '../entities/user';
import { UserRepository } from '../repositories/user-repository';

interface CreateUserRequest {
  email: string;
}

interface CreateUserResponse {
  user: User;
}

@Injectable()
export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute({ email }: CreateUserRequest): Promise<CreateUserResponse> {
    const user = new User({
      email,
    });

    await this.userRepository.create(user);

    return { user };
  }
}
