import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  email: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  password: string;
}
export class LoginUserDto {
  email: string;
  password: string;
}
export class UserDto extends CreateUserDto {
  createdAt: string;
  updatedAt: string;
  _id: string | number;
  __v: number;
}

export class LoggedUser {
  user: UserDto;
  token: string;
}
