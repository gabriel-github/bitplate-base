import { IsNotEmpty } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  email: string;
}
