import { User } from 'src/application/entities/user';
import { UserRepository } from 'src/application/repositories/user-repository';

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }
}
