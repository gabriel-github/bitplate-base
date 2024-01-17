import { InMemoryUserRepository } from 'test/repositories/user-repository';
import { CreateUser } from './create-user';

describe('Create user usecase', () => {
  it('Should be able create a user', async () => {
    const userRository = new InMemoryUserRepository();
    const usecase = new CreateUser(userRository);

    const { user } = await usecase.execute({
      email: 'teste@gmail.com',
    });

    expect(user.id).toBeDefined();
    expect(user.email).toEqual('teste@gmail.com');
  });
});
