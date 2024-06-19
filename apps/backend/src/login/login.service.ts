import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { LoginUserDto } from './dto/login-dto';

@Injectable()
export class LoginService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async login(loginUserDto: LoginUserDto) {
    const loginUser = await this.userModel
      .findOne({
        email: loginUserDto.email,
        password: loginUserDto.password,
      })
      .exec();
    const user = await this.userModel.findById(loginUser.id);
    console.log(user);
    if (user && user.password === loginUserDto.password) {
      return { message: 'Login successful', user };
    }
    return { message: 'Invalid credentials' };
  }
}
